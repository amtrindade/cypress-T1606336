/// <reference types="cypress" />

describe('Testes da API da serverest', () => {

    it('Listar usuários da API', () => {

        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('quantidade');
            expect(response.body).to.have.property('usuarios');
            expect(response.body.usuarios).to.be.an('array');
            expect(response.body.usuarios[0]).to.have.property('nome');
        })
    })

    it('Cadastrar um novo usuário na API', () => {

        const newUser = {
            nome: 'João da Silva',
            email: `joao.silva${Date.now()}@exemplo.com`,
            password: 'senha123',
            administrador: 'true'
        };

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: newUser
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
            expect(response.body).to.have.property('_id');
            const userId = response.body._id;

            // Consultar o usuário recém-criado para verificar os dados
            cy.request({
                method: 'GET',
                url: `https://serverest.dev/usuarios/${userId}`
            }).then((getResponse) => {
                expect(getResponse.status).to.equal(200);
                expect(getResponse.body).to.have.property('nome', newUser.nome);
                expect(getResponse.body).to.have.property('email', newUser.email);
                expect(getResponse.body).to.have.property('administrador', newUser.administrador);
            });
        })
    })

    it('Validar mensagem de erro ao cadastrar usuário com email já existente', () => {
        
        const existingUser = {
            nome: 'Maria Oliveira',
            email: `maria${Date.now()}@example.com`,
            password: 'senha456',
            administrador: 'false'
        };

        // Cadastrar o usuário pela primeira vez
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: existingUser
        }).then((response) => {
            expect(response.status).to.equal(201);
        });

        // Tentar cadastrar o mesmo usuário novamente para gerar erro
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: existingUser,
            failOnStatusCode: false // Impede o Cypress de falhar automaticamente no status de erro
        }).then((errorResponse) => {
            expect(errorResponse.status).to.equal(400);
            expect(errorResponse.body).to.have.property('message', 'Este email já está sendo usado');
        });
    });    

    it('Editar um usuário existente na API', () => {

        const updatedUser = {
            nome: 'Carlos Pereira',
            email: `carlos.pereira${Date.now()}@exemplo.com`,
            password: 'novaSenha789',
            administrador: 'false'
        };

        // Primeiro, cadastrar um novo usuário para depois editá-lo
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                nome: 'Usuário Temporário',
                email: `tempuser${Date.now()}@example.com`, // Email temporário
                password: 'tempPassword123',
                administrador: 'true'
            }
        }).then((createResponse) => {
            const userId = createResponse.body._id; // Obtenha o ID do usuário criado

            // Agora, editar o usuário criado
            cy.request({
                method: 'PUT',
                url: `https://serverest.dev/usuarios/${userId}`,
                body: updatedUser
            }).then((updateResponse) => {
                expect(updateResponse.status).to.equal(200);
                expect(updateResponse.body).to.have.property('message', 'Registro alterado com sucesso');
            
                // Consultar o usuário editado para verificar os dados atualizados
                cy.request({
                    method: 'GET',
                    url: `https://serverest.dev/usuarios/${userId}`
                }).then((getResponse) => {
                    expect(getResponse.status).to.equal(200);
                    expect(getResponse.body).to.have.property('nome', updatedUser.nome);
                    expect(getResponse.body).to.have.property('email', updatedUser.email);
                    expect(getResponse.body).to.have.property('administrador', updatedUser.administrador);
                });
            })
        })
    })
})