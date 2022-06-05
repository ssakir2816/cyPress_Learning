/// <reference types="Cypress" />

describe('My cyPress Training Part5', () => {
    it('child window', () => {
      //vist site
      cy.visit(Cypress.env('baseurl'))
   
      //child window can't be handle by cypress
      //workaround hit the url for child window
      //it will always have ahref attribue
      //grab attribute value
      //cypress not support cross domain
        //using prop method of jquery
      cy.get('#opentab').then(function(el)
      {
          const url=el.prop('href')
          cy.visit(url)
      })
    })
    
  })