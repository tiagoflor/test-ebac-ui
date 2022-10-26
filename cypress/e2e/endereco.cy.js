import EnderecoPage from '../support/page-objects/endereco.page' //importando Page Objects

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
     beforeEach(() => {
          cy.visit('minha-conta')
          cy.fixture('perfil').then(dados => {
               //passando os parametros como fixtures depois de criar comandos customizados  
               cy.login(dados.usuario, dados.senha)
          })
     });

     // cenário utilizando Page Object
     it.only('Deve fazer cadastro de faturamento com sucesso', () => {
          //cadastro de endereço passando os parametros
          EnderecoPage.editarEnderecoFaturamento('Tiago', 'Flor', 'EBAC', 'Brasil', 'Rua Adail', '222','Rio de Janeiro', 'Rio de Janeiro', '21040000', '21999999999', 'teste@teste.com.br' )
          cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
     });


});