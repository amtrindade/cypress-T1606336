/// <reference types="cypress" />

describe('Spec referente aos testes de login', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('endpoint'))
    })

    it('Deve fazer login com sucesso', () => {
        cy.login(Cypress.env('environment'), Cypress.env('username'), Cypress.env('password'))
        
        cy.get('.profile-widget').click()
        cy.get('.text-login').parent().invoke('text').then(text => {
            expect(text.replace(/\s+/g, '')).to.equal('Aluno01(aluno01)')
        })
    })

})