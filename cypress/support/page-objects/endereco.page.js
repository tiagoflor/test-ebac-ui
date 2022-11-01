// criado PAGE OBJECTS
class EnderecoPage {
     // Passar os parametros dos metodos e chama-los no  step
     editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email) {
          //elementos + acoes
          cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
          cy.get(':nth-child(1) > .title > .edit').click()
          cy.get('#billing_first_name').clear().type(nome) //usar o clear para limpar
          cy.get('#billing_last_name').clear().type(sobrenome)
          cy.get('#billing_company').clear().type(empresa)
          cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
          cy.get('#billing_address_1').clear().type(endereco)
          cy.get('#billing_address_2').clear().type(numero)
          cy.get('#billing_city').clear().type(cidade)
          //exemplo utilizando ações do teclado e concatenando
          cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
          cy.get('#billing_postcode').clear().type(cep)
          cy.get('#billing_phone').clear().type(telefone)
          cy.get('#billing_email').clear().type(email)
          cy.get(':nth-child(2) > .button').click()

          /*     Exemplo Page object inicial sem passar os parametros
          cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
          cy.get(':nth-child(1) > .title > .edit').click()
          cy.get('#billing_first_name').clear().type('Tiago') //usar o clear para limpar
          cy.get('#billing_last_name').clear().type('Silva')
          cy.get('#billing_company').clear().type('EBAC')
          cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
          cy.get('#billing_address_1').clear().type('Rua Adail')
          cy.get('#billing_address_2').clear().type('222')
          cy.get('#billing_city').clear().type('Rio de Janeiro')
          cy.get('#select2-billing_state-container').click().type('Rio de Janeiro{enter}') //exemplo utilizando ações do teclado
          cy.get('#billing_postcode').clear().type('21040000')
          cy.get('#billing_phone').clear().type('21999999999')
          cy.get('#billing_email').clear().type('teste@teste.com.br')
          cy.get('.button').click()
          */
     }

     editarEnderecoEntrega() {
          //elementos + acoes
     }

}

export default new EnderecoPage() //permite que seja importado em outros arquivos de teste