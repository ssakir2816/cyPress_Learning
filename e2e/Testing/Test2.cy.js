/// <reference types="Cypress" />

describe('My cyPress Training Part2', () => {
    it('CheckBoxes', () => {
      //viist site
      cy.visit(Cypress.env('baseurl'))
      //single checkbox click and assertion
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      //multiple checkbox click
      cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')
    })

    it('DropDown', () => {
       //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

       //dynamic dropdown
       cy.get('#autocomplete').type('Ind')
    
       cy.get('.ui-menu-item div').each(function($el, index, $list){
        if($el.text()==="India")
        {
            cy.wrap($el).click();
        }
       })
       cy.get('#autocomplete').should('have.value','India')

      })

      it('Visibility', () => {
        //visible
        cy.get('#displayed-text').should("be.visible")
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should("not.be.visible")

      })

      it('Radio button', () => {
        //radiobutton
        cy.get('[for="radio2"] > .radioButton').check().should('be.checked')
      })
 

  })