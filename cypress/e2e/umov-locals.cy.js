/// <reference types="cypress" />

import loc from '../support/locators.js'

describe('Spec referente as funcionalidades do cadastro de locais', () => {

    function getRandomInt() {
        return Math.floor(Math.random() * 100000);
    }
    let nameLocal = ''  
    
    beforeEach(() => {
        nameLocal = 'Local Cypress ' + getRandomInt()

        cy.visit(Cypress.env('endpoint'))
        cy.login(Cypress.env('environment'), Cypress.env('username'), Cypress.env('password'))
        cy.get(loc.MENU.OPTION_LOCALS).click()
    })

    it('Deve cadastrar um novo local', () => {
        cy.get(loc.LIST_LOCATIONS.BTN_NEW_LOCATION).click()
        cy.get(loc.DETAIL_LOCATION.TF_DESCRIPTION).type(nameLocal)
        cy.get(loc.DETAIL_LOCATION.TF_CORPORATE_NAME).type('Empresa Teste Cypress LTDA')
        cy.get(loc.DETAIL_LOCATION.TF_STREET_TYPE).type('Rua')
        cy.get(loc.DETAIL_LOCATION.TF_STREET).type('Cypress Street')
        cy.get(loc.DETAIL_LOCATION.TF_STREET_NUMBER).type('666')
        cy.get(loc.DETAIL_LOCATION.TF_ZIP_CODE).type('904000-000')
        cy.get(loc.DETAIL_LOCATION.BTN_SAVE).click()

        cy.search(nameLocal)

        cy.get(loc.LIST_LOCATIONS.TABLE_LOCATIONS).contains('td', nameLocal).should('be.visible')
    })

    describe('Testes que dependem do cadastro de um local executado anteriormente', () => {
        beforeEach(() => {
            cy.get(loc.LIST_LOCATIONS.BTN_NEW_LOCATION).click()
            cy.get(loc.DETAIL_LOCATION.TF_DESCRIPTION).type(nameLocal)
            cy.get(loc.DETAIL_LOCATION.TF_CORPORATE_NAME).type('Empresa Teste Cypress LTDA')
            cy.get(loc.DETAIL_LOCATION.TF_STREET_TYPE).type('Rua')
            cy.get(loc.DETAIL_LOCATION.TF_STREET).type('Cypress Street')
            cy.get(loc.DETAIL_LOCATION.TF_STREET_NUMBER).type('666')
            cy.get(loc.DETAIL_LOCATION.TF_ZIP_CODE).type('904000-000')
            cy.get(loc.DETAIL_LOCATION.BTN_SAVE).click()
        })

        it('Deve editar um local cadastrado', () => {
            cy.search(nameLocal)
            cy.get(loc.LIST_LOCATIONS.TABLE_LOCATIONS)
                .contains('td', nameLocal)
                .parent()
                .find(loc.LIST_LOCATIONS.BTN_EDIT)
                .click()
            cy.get(loc.DETAIL_LOCATION.TF_DESCRIPTION).clear().type(nameLocal + ' Edit')
            cy.get(loc.DETAIL_LOCATION.BTN_SAVE).click()

            cy.search(nameLocal + ' Edit')
            cy.get(loc.LIST_LOCATIONS.TABLE_LOCATIONS).contains('td', nameLocal + ' Edit').should('be.visible')
        })

        it('Deve inativar um local cadastrado', () => {
            cy.search(nameLocal)
            cy.get(loc.LIST_LOCATIONS.TABLE_LOCATIONS)
                .contains('td', nameLocal)
                .parent()
                .find(loc.LIST_LOCATIONS.BTN_EDIT)
                .click()
            cy.get('#serviceLocal_active').uncheck()
            cy.get(loc.DETAIL_LOCATION.BTN_SAVE).click()
            
            cy.search(nameLocal)
            cy.get(loc.LIST_LOCATIONS.PAGE_CONTENT).contains('Nothing found to display').should('be.visible')
        })
            
    })
})
