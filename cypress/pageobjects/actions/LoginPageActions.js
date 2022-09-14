import LoginPageElements from "../elements/LoginPageElements";

export default class LoginPageActions {

    constructor() {

        globalThis.element = new LoginPageElements()
    }

    acessarPaginaLogin() {
        cy.viewport(1024,768)
        cy.visit('https://portalwebtest-hml.azure.net/test/login')
    }

    validarTituloDaPagina() {
        return cy.title()
    }

    validarLogoCliente() {
        return element.logoCliente()
    }

    validarTituloBemVindo() {
        return element.txtBemVindo()
    }

    validarTituloSistema() {
        return element.txtClienteReserva()
    }

    validarDescricaoUsuario() {
        return element.txtUsuario()
    }

    validarCampoUsuario() {
        return element.fieldUsuario()
    }

    preencherCampoUsuario(usuario) {
        return element.fieldUsuario().type(usuario)
    }

    validarDescricaoSenha() {
        return element.txtSenha()
    }

    validarCampoSenha() {
        return element.fieldSenha()
    }

    preencherCampoSenha(senha) {
        return element.fieldSenha().type(senha)
    }

    validarBotaoEntrar() {
        return element.btnEntrar()
    }

    clicarBotaoEntrar() {
        return element.btnEntrar().click()
    }

    validarMensagemLoginIncorreto() {
        return element.txtValidacao()
    }

}
