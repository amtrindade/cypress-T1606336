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

    it('Validações do tipo Array', () => {

        const arrInt = [1, 2, 3, 4, 5];

        expect(arrInt).to.be.an('array');
        expect(arrInt).to.have.length(5);
        expect(arrInt).to.include.members([1, 5, 4]);
        expect(arrInt).to.not.include.members([6, 7]);
        expect(arrInt[1]).to.be.equal(2);

        const arrStr = ['Java', 'JavaScript', 'Python', 'Cypress'];
        
        expect(arrStr).to.be.an('array');
        expect(arrStr).to.have.length(4);
        expect(arrStr).to.include.members(['JavaScript', 'Cypress']);
        expect(arrStr).to.not.include.members(['Ruby', 'PHP']);
        expect(arrStr[3]).to.be.equal('Cypress');
    });

    it('Validações do tipo Objeto', () => {

        const pessoa = {
            nome: 'Antônio Trindade',
            idade: 35,
            profissao: 'Analista de Testes',
            empresa: 'Empresa X'
        };
        
        expect(pessoa).to.be.an('object');
        expect(pessoa).to.have.property('nome').equal('Antônio Trindade');
        expect(pessoa).to.have.property('idade').equal(35);
        expect(pessoa).to.have.property('profissao').equal('Analista de Testes');
        expect(pessoa).to.have.property('empresa').equal('Empresa X');

        const pessoa2 = {
            nome: 'Antônio Trindade',
            idade: 35,
            profissao: 'Analista de Testes',
            empresa: 'Empresa X'
        };

        //Compara dois objetos
        expect(pessoa2).to.be.not.equal(pessoa);
        //Compara o conteúdo das propriedades dos objetos
        expect(pessoa2).to.be.deep.equal(pessoa);      
    });

});