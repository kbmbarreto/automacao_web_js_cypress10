class LoginPageElements {

    logoCliente = () => { return cy.get('#maincontent > app-login > div > div > div > div.card.card2 > div > img') }
    txtBemVindo = () => { return cy.get('#maincontent > app-login > div > div > div > div.card.card1 > div > form > div > div.row.m-2.welcome') }
    txtClienteReserva = () => { return cy.get('#maincontent > app-login > div > div > div > div.card.card1 > div > form > div > div.row.m-2.welcome-title') }
    txtUsuario = () => { return cy.get('#maincontent > app-login > div > div > div > div.card.card1 > div > form > div > div:nth-child(3) > label') }
    fieldUsuario = () => { return cy.get('#usuario') }
    txtSenha = () => { return cy.get('#maincontent > app-login > div > div > div > div.card.card1 > div > form > div > div:nth-child(4) > label') }
    fieldSenha = () => { return cy.get('#senha') }
    btnEntrar = () => { return cy.get('#maincontent > app-login > div > div > div > div.card.card1 > div > form > div > div.row.justify-content-center.my-3.px-3 > button') }

    txtValidacao = () => { return cy.get('#maincontent > app-login > div > div > div > div.card.card1 > div > form > div > div.row.my-2.text-center.invalid-login > div') }
}

export default LoginPageElements;
