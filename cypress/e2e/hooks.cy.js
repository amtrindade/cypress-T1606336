
describe('Estrura do describe', () => {

    before(() => {
        cy.log('Antes de todos os cenários')
    })

    after(() => {
        cy.log('Depois de todos os cenários')
    })
      
    beforeEach(() => {
        cy.log('Antes de cada cenário')
    })

    afterEach(() => {
        cy.log('Depois de cada cenário')
    })

    it('Cenário 1', () => {
        cy.log('Cenário 1')
    })

    it('Cenário 2', () => {
        cy.log('Cenário 2')
    })

    it('Cenário 3', () => {
        cy.log('Cenário 3')
    })

    describe('Estrura do describe 2', () => {

        before(() => {
            cy.log('Antes de todos os cenários do describe 2')
        })  

        beforeEach(() => { 
            cy.log('Antes de cada cenário do describe 2') 
        })  

        it('Cenário 4', () => {
            cy.log('Cenário 4')
        })

        it('Cenário 5', () => {
            cy.log('Cenário 5')
        })
    })

})