/// <reference types="Cypress" />
// cypress key : cypress run --record --key 6c95e3dd-9c47-4024-b736-930f9406c8a8
describe('My cyPress Training Part1', () => {
    it('My First Test', () => {
      //viist site
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })
    it('My Second Test', () => {
      //select element and type
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      //length of multiple product with some assertion
      cy.get('.product:visible').should('have.length',4)
      cy.get('.products').find('.product').should('have.length',4)
      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
      
      
    })
    it('My Third Test', () => {
      //alias
      cy.get('.products').as('productLocator')
      //main function going through loop
      cy.get('@productLocator').find('.product').each(function($el, index, $list){
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
          cy.wrap($el).find('button').click()
        }

      })
    })

    it('My Fourth Test', () => {
      //print in log
     cy.get('.brand').then(function(logoelement){
       cy.log(logoelement.text())
     })
     cy.get('.brand').should('have.text','GREENKART')

    })

    it('My Fifth Test', () => {
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()


    })

  })