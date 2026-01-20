/// <reference types="cypress" />

describe('Explorando describe e it', () => {

    it('Valida o título da página', () => {
        cy.visit('/');
        cy.title().should('be.equal', 'Treino Automação de Testes');

        cy.get(':nth-child(6) > a').click();
        cy.get('[name="txtbox1"]').type('Teste de Campo').should('have.value', 'Teste de Campo');
    });

    it('Valida link de direcionamento para outra página', () => {
        cy.visit('/')
        cy.get('[href="http://www.sahi.co.in/demo/dragDropMooTools.htm"]')
            .should('have.attr', 'href', 'http://www.sahi.co.in/demo/dragDropMooTools.htm')
            .should('have.attr', 'target', '_blank');

    })

});