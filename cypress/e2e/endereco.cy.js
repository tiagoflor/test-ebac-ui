describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
     beforeEach(() => {
          cy.visit('minha-conta')
          cy.fixture('perfil').then(dados => {
               //passando os parametros como fixtures depois de criar comandos customizados  
               cy.login(dados.usuario, dados.senha)
          })
     });


     it('Deve fazer cadastro de faturamento com sucesso', () => {
          //cadastro de endereço

     });
});