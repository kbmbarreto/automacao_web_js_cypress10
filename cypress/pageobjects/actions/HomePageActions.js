import HomePageElements from "../elements/HomePageElements";

export default class HomePageActions {

    constructor() {

        globalThis.elementHome = new HomePageElements()
    }

    validarTituloDaPagina() {
        return cy.title()
    }

    validarLogoCliente() {
        return element.logoCliente()
    }

    validarTituloBemVindo() {
        return elementHome.txtBemVindo()
    }

}
