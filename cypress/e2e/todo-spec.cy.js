/// <reference types="cypress" />

describe('Trabalhando com a lista de tarefas', () => {
    
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo ')
    })

    it('Cadastrar nova tarefa', () => {
        cy.get('.todo-list li').should('have.length', 2)
        cy.get('.new-todo').type('Estudar Cypress{enter}')
        //Verifica o tamanho atual da lista
        cy.get('.todo-list li').should('have.length', 3)
        //Verifica se o último item da lista é a tarefa cadastrada
        cy.get('.todo-list li').last().should('have.text', 'Estudar Cypress')
        cy.get('.todo-list').contains('Estudar Cypress').should('be.visible')
    })

    describe('Marcar e desmarcar tarefas como concluídas', () => {
        
        beforeEach(() => {
            cy.get('.new-todo').type('Estudar Cypress{enter}')
        })

        it('Marcar tarefa como concluída', () => {

        })
    })
})