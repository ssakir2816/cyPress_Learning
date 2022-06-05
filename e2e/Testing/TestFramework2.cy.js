/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage.cy'
import ProductPage from '../../support/pageObjects/ProductPage.cy'

//in this file, we call our method from pageObjects
describe('My cyPress Framework Part2', () => {

    //declaring before hook(this structure is working)
        let data;
      before(() => {
        cy.fixture('example').then((fData) => {         //fixture/example
            data = fData                                //alternate of this condition
        })
      })
        it('Framework', () => {
            //create object of import class
            const homePage = new HomePage()
            const productPage = new ProductPage()
             //vist site
             cy.visit("https://rahulshettyacademy.com/angularpractice/")
    
          homePage.getEditBox().type(data.name)
          homePage.getGender().select(data.gender)
          //assertion two way binding value
          homePage.getTwoWayDataBinding().should('have.value',data.name)
          //attribute to validate
          homePage.getEditBox().should('have.attr','minlength','2')
                //disbale or not
          homePage.getEntrepreneur().should('be.disabled')
          //use of pause for debug
            //cy.pause()
    
          homePage.getShopTab().click()
         cy.selectProduct('Blackberry')     //define the method in support--command.js file as generic
         cy.selectProduct('Nokia Edge')
            // but if we to select multiple product
            //1. define array in exmple.json in fixture
            //2. iterate in loop in code
            //below block is important 
            data.productName.forEach(function(element)
            {
                console.log(element);
                cy.selectProduct(element)
            })
            var sum=0
            productPage.getCheckoutBasket().click()
            //here writing logic for getting all product price in basket
            cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
                const productPrice = $el.text()
               var result = productPrice.split(" ")
               result = result[1].trim()
               //cy.log(result)
                sum = sum+Number(result)
                
            })
                .then(function()
                {
                    cy.log(sum)
                })
            cy.get('tbody > tr:nth-child(3) > td.text-right > h3 > strong').then(function(element)
            {const totalProductPrice = element.text()
                var totalPrice = totalProductPrice.split(" ")
                totalPrice = totalPrice[1].trim()
                expect(sum).to.equal(Number(totalPrice))
            })  
            productPage.getCheckOutPayment().click()
            productPage.getDeliveryLocation().type('India')
            cy.wait(8000)
            //Cypress.config('defaultCommandTimeout',8000)
            productPage.getSuggestionText().click()
            productPage.getPurchaseButton().click()
            //from below command you will get extra charcter error \n so better use "include"
            //productPage.getSuccessMessage().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

            productPage.getSuccessMessage().then(function(element)
            {
                const actualText = element.text()
               // if(actualText.includes("Success! Thank you! Your order will be delivered in next few weeks"))
               
               expect(actualText.includes("Success")).to.be.true
               //End of lecture 53
            })
            })
            
                //getting product price and vverify with Total value

          
      })