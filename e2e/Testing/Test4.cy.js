/// <reference types="Cypress" />

describe('My cyPress Training Part3', () => {
    it('Table', () => {
      //vist site
      cy.visit(Cypress.env('baseurl'))
      //selecting 2nd column
      cy.get('tr td:nth-child(2)').each(function($el, index, $list){
          const courseName=$el.text()
          if(courseName.includes("Python"))
          {
              //next() in cypress..it get the immediate following sibling
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
              {
                  const priceText = price.text()
                  expect(priceText).to.equal('25')
              })
          }


      })
      
        })

        it('Mouse hover popup', () => {
            //cypress don't handle mouse hover
            //but we have JQuery to handle this using show method

            cy.get('.mouse-hover-content').invoke('show')  //in get we should immediate parent then only it will work not with grandparent
            cy.contains('Top').click()
            cy.url().should('include','top')
                //forcing clicking, click({ force: true })
                cy.get('.mouse-hover-content').click({ force: true })
                cy.contains('Top').click()
            cy.url().should('include','top')
        })
  })