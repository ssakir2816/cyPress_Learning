class ProductPage
{
 getCheckoutBasket()
 {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')

}
getCheckOutPayment()
{
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')
}
getDeliveryLocation()
{
    return cy.get('#country')
}
getPurchaseButton()
{
    return cy.get('form.ng-untouched > .btn')
}
getSuggestionText()
{
    return cy.get('.suggestions > ul > li > a')
}
getSuccessMessage()
{
    return cy.get('.alert')
}



}

export default ProductPage;