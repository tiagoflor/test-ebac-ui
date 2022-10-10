
const { faker } = require('@faker-js/faker'); //usado para criar email fake dinamico

describe('Deve completar o pré cadastro', () => {
    
    
    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve complettar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email()) // chamando a metodo faker para criar email aleatorio
        cy.get('#reg_password').type('!teste@teste2')
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName()) // chamando a metodo faker para criar nome
        cy.get('#account_last_name').type(faker.name.lastName()) // chamando a metodo faker para criar ultimo nome
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhe da conta modificados com sucesso')

    });

});

/*
 OUTRA FORMA DE FAZER
 --------------------
 
const { faker } = require('@faker-js/faker'); //usado para criar email fake dinamico

describe('Deve completar o pré cadastro', () => {
    var nomeFaker = faker.name.firstName()
    var sobreNomeFaker = faker.name.lastName()
    var emailFaker = faker.internet.email()
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve complettar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(emailFaker) // chamando a metodo faker para criar email aleatorio
        cy.get('#reg_password').type('!teste@teste2')
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker) // chamando a metodo faker para criar nome
        cy.get('#account_last_name').type(sobreNomeFaker) // chamando a metodo faker para criar ultimo nome
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhe da conta modificados com sucesso')

    });

});

*/ 