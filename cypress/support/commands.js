Cypress.Commands.add('login', (environment, username, password) => { 
    cy.get('#workspace').type(environment)
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#submit_button').click()
 })
