import EnderecoPage from '../support/page-objects/endereco.page' //importando Page Objects
const dadosEndereço = require('../fixtures/endereco.json') // passando massa de dados com lista
describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
     beforeEach(() => {
          cy.visit('minha-conta')
          cy.fixture('perfil').then(dados => {
               //passando os parametros como fixtures depois de criar comandos customizados  
               cy.login(dados.usuario, dados.senha)
          })
     });

     // cenário utilizando Page Object
     it('Deve fazer cadastro de faturamento com sucesso', () => {
          //metodo faturamento passando os parametros
          EnderecoPage.editarEnderecoFaturamento('Tiago', 'Flor', 'EBAC', 'Brasil', 'Rua Adail', '222','Rio de Janeiro', 'Rio de Janeiro', '21040000', '21999999999', 'teste@teste.com.br' )
          cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
     });
    // Utilizando Massa de Arquivos
     it.only('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo de dados', () => {
          //metodo faturamento passando os parametros
          EnderecoPage.editarEnderecoFaturamento(  //passando segundo objeto da lista
               dadosEndereço[1].nome,
               dadosEndereço[1].sobrenome,
               dadosEndereço[1].empresa,
               dadosEndereço[1].pais,
               dadosEndereço[1].endereco,
               dadosEndereço[1].numero,
               dadosEndereço[1].cidade,
               dadosEndereço[1].estado,
               dadosEndereço[1].cep,
               dadosEndereço[1].telefone,
               dadosEndereço[1].email,
               )
          cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
     });


});