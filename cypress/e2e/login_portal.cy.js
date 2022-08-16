/*
context('Funcionalidade Login', () => {
    //cenário caminho feliz
     it('Deve fazer login com sucesso', () => {
       cy.visit('https://portaldesolucoes-hmlg.cnseg.org.br/#/login')
       cy.get('#onetrust-accept-btn-handler').click()
       cy.get('section > .form-group > .form-control').type('tiago.flor@quality.com.br')
       cy.get('#password').type('CNSEG#12345')
      
       cy.get('.btn').click()
       cy.wait(10000) //precisa abrir e fechar parenteses mesmo que não venha passa nenhum parametro
       cy.get('.modal-footer > .btn').click()
       cy.get('#dropdownManual').click()
       cy.get('.dropdown-menu > :nth-child(4)').click()
       cy.get('.btn-primary').click()
     })
 
     //cenário caminho negativo
     it('deve exibir uma mensagem de erro ao inserir usuario ou senha inválidos', () => {
 
     }) 
 })
*/