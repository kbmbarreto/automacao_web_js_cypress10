# automacao_web_js_cypress10

<p>Projeto criado para automação de casos de teste do portal web Cliente Privado.</p>

## Ferramentas utilizadas

- Node.js
- Cypress 10

## Preparação do ambiente
Para rodar o projeto, utlize a IDE que você mais se identifique **(no meu caso, utilizo o Jetbrains WebStorm)**, em
seguida, utilize os comandos abaixo para rodar os testes:

`npx cypress run`: para rodar os testes no navegador padrão do Cypress (Electron);<br>
`npx cypress run -b edge`: para rodar os testes no navegador Edge, da Microsoft; <br>
`npx cypress run -b firefox`: para rodar os testes no navegador Firefox, da Mozilla;<br>
`npx cypress run -b chrome`: para rodar os testes no navegador Chrome, do Google; <br>

**Observação:**

Caso deseje rodar os testes com qualquer navegador que não seja o Electron, deve,
primeiramente, instalar tais navegadores.

**Arquivos e diretórios:**

- /videos

    Pasta contendo as evidências de teste em vídeo, geradas durante a execução dos testes;
- /support

    Diretório com alguns métodos e arquivos de suporte úteis para o projeto;
- /support/users.json

    Arquivo .json contendo os usuários para login no portal web;
- /pageobjects/elements

    Onde estão mapeados os elementos e locators das páginas web;
- /actions

    Onde é configurada cada ação do elemento com base na página, tudo o que se pode fazer na página está configurado aqui;
- /cypress/e2e/testcases/login

    Diretório que contém os casos de teste escritos;

## Links e documentações úteis.

- [Executando testes com múltiplas tags](https://dev.to/r0nunes/cypress-executando-testes-com-multiplas-tags-4e89?_gl=1*18s2jvf*_ga*MTE1Mzk2Mjc2My4xNjQ1MTI0Nzky*_ga_37GXT4VGQK*MTY0OTU0MjkzMC4xNC4xLjE2NDk1NDUzMzguMA..)
- [Documentação oficial do Cypress](https://www.cypress.io/)
- [Documentação do novo Cypress 10](https://www.cypress.io/blog/2022/06/01/cypress-10-release/)

Desenvolvido e aprimorado por Kleber Barreto de Macedo - 2022
