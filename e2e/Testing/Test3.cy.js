/// <reference types="Cypress" />

describe('My cyPress Training Part3', () => {
    it('Popup', () => {
      //vist site
      cy.visit(Cypress.env('baseurl'))
        cy.get('#alertbtn').click()
        //simple alert with OK button
        cy.on('window:alert',(str) => 
        {  //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()
        //popup with confirmation OK or cancel
        cy.on('window:confirm',(str) => 
        {  //mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })

    it('Child Tab', () => {
     //child tab not handle by cypress
     //html have target="_blank" so it go to new child tab
     //cypress can manipulate the DOM

     cy.get('#opentab').should('have.attr','target') //assertion proof that it wil open in new tab
     //invoke function
     cy.get('#opentab').invoke('removeAttr','target').click()

  
      })

      it('go and url', () => {
//how to go back and forward and how to verify the url
        cy.go('back')
        cy.go('forward')
        cy.go('back')
        cy.url().should('include','rahulshettyacadem')
         })


 

  })