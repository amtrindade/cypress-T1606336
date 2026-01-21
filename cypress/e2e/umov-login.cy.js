/// <reference types="cypress" />

import loc from '../support/locators.js'

describe('Spec referente aos testes de login', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('endpoint'))
    })

    it('Deve fazer login com sucesso', () => {
        cy.login(Cypress.env('environment'), Cypress.env('username'), Cypress.env('password'))
        
        cy.get(loc.HOME.PROFILE_WIDGET).click()
        cy.get(loc.HOME.TEXT_LOGIN).parent().invoke('text').then(text => {
            expect(text.replace(/\s+/g, '')).to.equal('Aluno01(aluno01)')
        })
    })
})