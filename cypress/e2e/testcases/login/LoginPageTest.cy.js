import LoginPageActions from "../../../pageobjects/actions/LoginPageActions";
import HomePageElements from "../../../pageobjects/elements/HomePageElements";
import Utils from "../../../support/Utils";

describe('Validar componentes da tela de login', () => {

    const loginPage = new LoginPageActions()

    beforeEach(() => {
        loginPage.acessarPaginaLogin()
    })

    it('Deve aparecer o titulo da página corretamente', () => {
        loginPage.validarTituloDaPagina().should('eq', 'PortalOnlineTest.UI.AngularWebApp')
    })

    it('Deve aparecer logotipo da Estapar', () => {
        loginPage.validarLogoCliente().should('exist')
    })

    it('Deve aparecer a mensagem de Bem vindo', () => {
        loginPage.validarTituloBemVindo().invoke('text').should('eq', 'Bem vindo ao')
    })

    it('Deve aparecer o nome do sistema', () => {
        loginPage.validarTituloSistema().invoke('text').should('eq', 'Portal Test Online')
    })

    it('Deve aparecer descricao do campo usuario', () => {
        loginPage.validarDescricaoUsuario().invoke('text').should('eq', 'Usuário')
    })

    it('Deve aparecer campo usuário', () => {
        loginPage.validarCampoUsuario().should('exist')
    })

    it('Deve aparecer descricao do campo senha', () => {
        loginPage.validarDescricaoSenha().invoke('text').should('eq', 'Senha')
    })

    it('Deve aparecer campo senha', () => {
        loginPage.validarCampoSenha().should('exist')
    })

    it('Não deve aparecer validacao de login', () => {
        loginPage.validarMensagemLoginIncorreto().should('not.exist')
    })

    it('Deve aparecer botão de entrar', () => {
        loginPage.validarBotaoEntrar().should('exist')
    })
})

describe('Validar login de usuários', () => {

    const loginPage = new LoginPageActions()
    const homePage = new HomePageElements()
    const utils = new Utils()
    const users = require("../../../support/users.json")

    beforeEach(() => {
        loginPage.acessarPaginaLogin()
    })

    it('Deve exibir mensagem de erro ao digitar usuário errado', () => {
        loginPage.preencherCampoUsuario(users.usuarioIncorreto.usuario)
        loginPage.preencherCampoSenha(users.usuarioCorreto.senha)
        loginPage.clicarBotaoEntrar()
        utils.aguardarElemento(element.txtValidacao())
        loginPage.validarMensagemLoginIncorreto().invoke('text').should('eq', 'Usuário ou senha inválidos')
    })

    it('Deve exibir mensagem de erro ao digitar senha errada', () => {
        loginPage.preencherCampoUsuario(users.usuarioCorreto.usuario)
        loginPage.preencherCampoSenha(users.usuarioIncorreto.senha)
        loginPage.clicarBotaoEntrar()
        utils.aguardarElemento(element.txtValidacao())
        loginPage.validarMensagemLoginIncorreto().invoke('text').should('eq', 'Usuário ou senha inválidos')
    })

    it('Deve exibir mensagem de erro ao digitar usuário e senha errados', () => {
        loginPage.preencherCampoUsuario(users.usuarioIncorreto.usuario)
        loginPage.preencherCampoSenha(users.usuarioIncorreto.senha)
        loginPage.clicarBotaoEntrar()
        utils.aguardarElemento(element.txtValidacao())
        loginPage.validarMensagemLoginIncorreto().invoke('text').should('eq', 'Usuário ou senha inválidos')
    })

    it('Deve se logar com sucesso ao digitar usuário e senha corretos', () => {
        loginPage.preencherCampoUsuario(users.usuarioCorreto.usuario)
        loginPage.preencherCampoSenha(users.usuarioCorreto.senha)
        loginPage.clicarBotaoEntrar()
        homePage.txtBemVindo().invoke('text').should('eq', ' Bem vindo! ')
    })
})
