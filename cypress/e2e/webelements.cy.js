/// <reference types="cypress" />

describe('Trabalhando com elementos da web', () => {
    
    beforeEach(() => {
        cy.visit('/elementsweb.html')
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
            .wait(2000)
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

    it('Interagindo com checkboxes', () => {

        cy.get('[name="chkbox"]').should('have.length', 4)
        cy.get('[name="chkbox"]').check('Check 1').should('be.checked')
        cy.get('[name="chkbox"]').first().uncheck().should('not.be.checked')
        cy.get('[name="chkbox"]').first().check().should('be.checked')
        
        cy.get('[name="chkbox"]').check(['Check 2', 'Check 4']).should('be.checked')
        //Marca todos os checkboxes
        cy.get('[name="chkbox"]').check().should('be.checked') 
        //Desmarca todos os checkboxes
        cy.get('[name="chkbox"]').uncheck().should('not.be.checked')
    })

    it('Interagindo com selects', () => {
        cy.get('[name="dropdownlist"]').select('item2')
        cy.get('[name="dropdownlist"] > option[value="item2"]').should('be.selected')

        cy.get('[name="dropdownlist"] option').should('have.length', 10)
        cy.get('[name="dropdownlist"] option').eq(0).should('have.text', 'Item 1')
    })

    it('Interagindo com select múltiplo', () => {
        cy.get('[name="multiselectdropdown"]').select(['item1', 'item3', 'item5'])

        cy.get('[name="multiselectdropdown"] > option[value="item1"]').should('be.selected')
        cy.get('[name="multiselectdropdown"] > option[value="item3"]').should('be.selected')
        cy.get('[name="multiselectdropdown"] > option[value="item5"]').should('be.selected')
        cy.get('[name="multiselectdropdown"] > option[value="item6"]').should('not.be.selected')

        //Validar a quantidade de opções selecionadas e quais são elas com uso do comando then()
        cy.get('[name="multiselectdropdown"] option:selected').then($selectedOptions => {
            expect($selectedOptions).to.have.length(3)
            //Validação de cada uma das opções selecionadas
            expect($selectedOptions[0].value).to.equal('item1')
            expect($selectedOptions[1].value).to.equal('item3')
            expect($selectedOptions[2].value).to.equal('item5')
            //Validação alternativa mais simples
            expect($selectedOptions.toArray().map(option => option.value))
                .to.deep.equal(['item1', 'item3', 'item5'])
        })
    })

    //Utilizando o comando wrap()
    it.only('Utilizando o comando wrap()', () => {
        //cy.get('[name="txtbox1"]').type('Valida wrap')
        //     .should('have.value', 'Valida wrap')

        cy.get('[name="txtbox1"]').then($element => {
            
            $element.val('Valida wrap')

            //Valida sem o uso do wrap
            expect($element).to.have.value('Valida wrap')

            //Com o wrap eu consigo utilizar os comandos do Cypress dentro do then
            cy.wrap($element).should('have.value', 'Valida wrap')            
        })
        
    })

    it.only('Mais um exemplo utilizando o comando wrap', () => {
        const getName = () => {
            return 'Jane Lane'
        }

        cy.wrap({ name: getName }).invoke('name')
            .should('eq', 'Jane Lane') // true
    })
})