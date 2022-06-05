/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My cyPress Training Part6', () => {
    it('iframe', () => {
      //vist site
      //baseurl is written in cypress.config.jf file 
      cy.visit(Cypress.env('baseurl'))
      //example of url concat
      //cy.visit(Cypress.env('baseurl')+"/anyfurthertext")
      //first step load the frame main class
      cy.frameLoaded('#courses-iframe')
      //always include iframe so it know it need to serach in iframe only
      cy.iframe().find("a[href*='mentorship']").eq(0).click()  //this cssSelector you need to o by urself
      cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
   
//End of Session 8 here
    })
    //run from command line
    //lecture 57 single file run with different env
    //node_modules\.bin\cypress run --spec cypress\e2e\Testing\Test6.cy.js --env url=https:google.com --headed
  })