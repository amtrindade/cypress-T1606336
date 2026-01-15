/// <reference types="cypress" />

describe('Trabalhando com as operações da calculadora', () => {

    beforeEach(() => {
        cy.visit('/desafiosoma.html')
    })

    it('Validar a soma de dois números positivos', () => {
        cy.get('#number1').type('10')
        cy.get('#number2').type('20')
        cy.get('#somar').click()
        //cy.wait(5000)
        cy.get('#total', {timeout: 5000}).should('have.value', '30')
    })

    it('Validar a subtração de dois números posivo', () => {    
        cy.get('#number1').type('50')
        cy.get('#number2').type('20')
        cy.get('#subtrair').click()
        cy.get('#total').should('have.value', '30')
    })

    it('Validar a multiplicação de dois números positivos', () => {
        cy.get('#number1').type('10')
        cy.get('#number2').type('20')
        cy.get('#multiplicar').click()
        cy.get('#total').should('have.value', '200')
    })  

    it('Validar a divisão de dois números positivos', () => {
        cy.get('#number1').type('100')
        cy.get('#number2').type('20')
        cy.get('#dividir').click()
        cy.get('#total').should('have.value', '5')
    })
})