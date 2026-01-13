/// <reference types="cypress" />

describe('Trabalhando com elementos da web', () => {
    
    beforeEach(() => {
        cy.visit('https://antoniotrindade.com.br/treinoautomacao/elementsweb.html')
    })

    it('Validar o título da página', () => {
        cy.title().should('to.be.equal', 'WebElements Test Page Lab')
        cy.url().should('include', 'elementsweb')
    })

    it('Interagindo com campos de texto', () => {
        //1. Identifica o elemento
        //2. Interage com o elemento
        //3. Faz uma validação

        cy.get('[name="txtbox1"]').type('Hello world').should('have.value', 'Hello world')
        
    })
})