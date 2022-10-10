/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    before(() => {
        cy.visit('produtos')
    });


    it('Deve seleciona um produto da lista', () => {
        cy.get('[class="product-block grid"]') //utilizando dessa forma você seleciona a classe que quer usar
        //.first()   //metodo que seleciona o primeiro da lista
        //.last() // metodo que seleciona o ultimo da lista
        //.eq(2) // metodo que seleciona a posição de um item da lista
        .contains('Ariel Roll Sleeve Sweatshirt').click()  //seleciona uma palavra chave (caso o elemento seja clicavel)
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 15  //declarando uma váriavel é só passar os parâmetros conforme exemplo abaixo

        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        //cy.get('.input-text').clear().type(2) //limpa o campo e adiciona 2 no carrinho
        cy.get('.input-text').clear().type(quantidade) //passou parâmetro quantidade ao invés de trocar tudo é só passar o parâmetro
        cy.get('.single_add_to_cart_button').click()

        //exemplo resultado 1
        //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
        //exemplo resultado 2
        //cy.get('.woocommerce-message').should('contains', '2 × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

        //exemplo resultado com váriaveis
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        //exemplo resultado com varíaveis
        cy.get('.woocommerce-message').should('assert', quantidade + ' x “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

    });
    
});