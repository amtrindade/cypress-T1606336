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

        cy.get('[name="txtbox1"]')
            .type('Hello world')
            .should('have.value', 'Hello world')
        cy.get('[name="txtbox2"]')
            .should('be.disabled')
        cy.get('[name="txtbox2"]')
            .type('Teste', {force: true})
            .should('have.value', 'Teste')
    })

    it('Validando um campo label', () => {
        cy.get(':nth-child(2) > table > tbody > :nth-child(1) > :nth-child(1)')
            .should('have.text', 'TextField Enable:')
    })

    it('Interagindo com radio buttons', () => {
        cy.get('[name="radioGroup1"]').should('have.length', 4)
        cy.get('[name="radioGroup1"]').check('Radio 2').should('be.checked')
        cy.get('[name="radioGroup1"]').first().check().should('be.checked')
        cy.get('[name="radioGroup1"]').last().check().should('be.checked')
        cy.get('[name="radioGroup1"]').eq(2).check().should('be.checked')
        cy.get('[name="radioGroup1"]').eq(0).should('not.be.checked')
        cy.get('[name="radioGroup1"]').eq(1).should('not.be.checked')
        cy.get('[name="radioGroup1"]').eq(3).should('not.be.checked')
    })

})