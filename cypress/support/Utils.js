let count = 0

class Utils {

    aguardarElemento(objeto) {
        while (!objeto.should('exist') && count < 10) {
            cy.wait(1000)
            count = count + 1
        }
    }

    aguardarCarregamentoPagina(elementoPagina, valor) {
        while (!elementoPagina.should('have.text', valor) && count < 10) {
            cy.wait(1000)
            count = count + 1
        }
    }

    eventoClick(btn) {
        this.aguardarElemento(btn)
        cy.get(btn).pause().click()
    }
}

export default Utils;
