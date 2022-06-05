/// <reference types="Cypress" />

describe('My cyPress Framework Part1', () => {
//declaring before hook(this structure is working)
    let data;
  before(() => {
    cy.fixture('example').then((fData) => {         //fixture/example
        data = fData                                //alternate of this condition
    })
  })
    it('Framework', () => {
         //vist site
         cy.visit("https://rahulshettyacademy.com/angularpractice/")

      cy.get('input[name="name"]:nth-child(2)').type(data.name)
      cy.get('select').select(data.gender)
      //assertion two way binding value
      cy.get(':nth-child(4) > .ng-untouched').should('have.value',data.name)
      //attribute to validate
      cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
            //disbale or not
      cy.get('#inlineRadio3').should('be.disabled')
      //use of pause for debug
        //cy.pause()

      cy.get(':nth-child(2) > .nav-link').click()
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

        })

      
  })