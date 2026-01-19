/// <reference types="cypress" />

describe('Trabalhando com a lista de tarefas', () => {

    const newTask = 'Study Automation Test'
    
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo ')
    })

    it('Cadastrar nova tarefa', () => {
        cy.get('.todo-list li').should('have.length', 2)
        cy.get('.new-todo').type(`${newTask}{enter}`)
        //Verifica o tamanho atual da lista
        cy.get('.todo-list li').should('have.length', 3)
        //Verifica se o último item da lista é a tarefa cadastrada
        cy.get('.todo-list li').last().should('have.text', `${newTask}`)
        cy.get('.todo-list').contains(`${newTask}`).should('be.visible')
    })

    describe('Marcar e desmarcar tarefas como concluídas', () => {
        
        beforeEach(() => {
            cy.get('.new-todo').type(`${newTask}{enter}`)
        })

        it('Marcar tarefa como concluída', () => {
            cy.get('.todo-list').contains(`${newTask}`).parent().find('.toggle').check()

            // Clica no filtro "Completed"
            cy.get('.filters').contains('Completed').click()

            // Valida que apenas a nova tarefa está concluída
            cy.get('.todo-list li').should('have.length', 1)
                .and('have.text', `${newTask}`)
        })

        it('Excluir a nova tarefa e validar que foi excluída', () => {
            cy.get('.todo-list').contains(`${newTask}`).parent().find('.toggle').check()

            //Clica no delete da linha da tarefa
            cy.get('.todo-list').contains(`${newTask}`).parent()
                .find('button.destroy').invoke('show').click()

            // Valida que a lista voltou ao tamanho original
            cy.get('.todo-list li').should('have.length', 2)
            
            // Valida que a descrição da tarefa não existe mais
            cy.get('.todo-list').should('not.contain.text', `${newTask}`)
        })
    })
})