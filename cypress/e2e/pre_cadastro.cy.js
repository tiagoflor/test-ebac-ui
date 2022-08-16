
const { faker } = require('@faker-js/faker'); //usado para criar email fake dinamico

describe('Deve completar o pré cadastro', () => {
    
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve complettar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email()) // chamando a variavel faker pra usar os metodos
        cy.get('#reg_password').type('!teste@teste2')
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Tiago')
        cy.get('#account_last_name').type('Silva')
        cy.get('.woocommerce-Button').click()

    });

});