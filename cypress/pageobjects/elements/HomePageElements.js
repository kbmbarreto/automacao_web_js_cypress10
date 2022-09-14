class HomePageElements {

    logoCliente = () => { return cy.get('#maincontent > app-main-header > div > div > div > img') }
    txtBemVindo = () => { return cy.get('#maincontent > app-home > div > div') }
}

export default HomePageElements;
