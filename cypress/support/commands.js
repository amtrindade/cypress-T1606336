import loc from './locators.js'

Cypress.Commands.add('login', (environment, username, password) => { 
    cy.get(loc.LOGIN.TF_ENVIRONMENT).type(environment)
    cy.get(loc.LOGIN.TF_USERNAME).type(username)
    cy.get(loc.LOGIN.TF_PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
 })

 Cypress.Commands.add('search', (value) => {
    cy.get(loc.LIST_LOCATIONS.TF_SEARCH).type(value)
    cy.get(loc.LIST_LOCATIONS.BTN_SEARCH).click()
 })