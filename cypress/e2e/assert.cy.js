/// <reference types="cypress" />

describe('Trabalhando com asserções', () => {

    it('Validações do tipo Integer', () => {

        const num = 10;

        expect(num).to.be.equal(10);
        expect(num).to.be.a('number');
        expect(num).to.be.not.equal(9);

        expect(num).to.be.greaterThan(9);
        expect(num).to.be.lessThan(11);       
    });

    it('Validações do tipo String', () => {

        const str = 'Curso de Automação com Cypress';

        expect(str).to.be.equal('Curso de Automação com Cypress');
        expect(str).to.be.a('string');
        expect(str).to.have.length(30);

        expect(str).to.include('com Cypress');
        expect(str).to.contains('Automação');

        //expressões regulares
        expect(str).to.match(/^Curso de Automação com Cypress$/);
        expect(str).to.match(/^Curso/);
        expect(str).to.match(/Cypress$/);
        expect(str).to.match(/.{30}/);
    });

    it('Validações do tipo Boolean', () => {

        const bool = true;

        expect(bool).to.be.equal(true);
        expect(bool).to.be.a('boolean');
        expect(bool).to.be.true;
        expect(bool).to.not.be.false;
    });

    it('Validações do tipo Float', () => {

        const float = 10.5454;

        expect(float).to.be.equal(10.5454);
        expect(float).to.be.a('number');
        expect(float).to.be.greaterThan(10);
        expect(float).to.be.lessThan(11);

        expect(float).to.be.closeTo(10.5, 0.1);
    });

    
});