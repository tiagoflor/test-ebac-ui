const perfil = require('../fixtures/perfil.json') //importando o perfil JSON para chamar o user e login

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    /*afterEach(() => {
        cy.screenshot()
    });*/

    //cenário caminho feliz
     it('Deve fazer login com sucesso', () => {
      // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('aluno_ebac@teste.com')
       cy.get('#password').type('teste@teste.com')
       cy.get('.woocommerce-form > .button').click() //sempre usar o () mesmo que não tenha parâmetro
       cy.get('.page-title').should('contain' , 'Minha conta') //should usado para conter algo (ex: conter palavra minha conta)
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')
 
     })
     //--------------------------------------Utilizando perfil.json----------------------------------------------------------
     it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
      cy.get('#username').type(perfil.usuario) 
      cy.get('#password').type(perfil.senha, {log: false}) //evita de aparecer senha no teste, boa prática
      cy.get('.woocommerce-form > .button').click()
      cy.get('.page-title').should('contain' , 'Minha conta')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')

     });
     //--------------------------------------Usando Fixture-------------------------------------------------------------------
     it.only('Deve fazer login com Sucesso - Usando Fixture', () => {
      cy.fixture('perfil').then(dados => { //tudo que carregar do perfil será chamado de "dados"
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')
       }) //tudo que carregar do perfil será chamado de "dados"
     });
     
     //cenário caminho negativo
     it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
      // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('alun_ebac@teste.com')
       cy.get('#password').type('teste@teste.com')
 
       cy.get('.woocommerce-form > .button').click()      
       cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
     })
     
     //it.only('Deve exibir uma mensagem de erro ao inserir senha inválido', () => { executa somente esse teste
     it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
      // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('aluno_ebac@teste.com')
       cy.get('#password').type('test@teste.com')
       cy.get('.woocommerce-form > .button').click()      
       cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
     }) 
 })