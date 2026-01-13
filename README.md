# Projeto Cypress E2E - Turma T1606336

Projeto de testes end-to-end (E2E), desenvolvido no curso Automação de Testes com Cypress, para automação de testes em aplicações web.

## Sobre Cypress

[Cypress](https://www.cypress.io/) é um framework de testes moderno construído para a era moderna da web. Ele oferece uma experiência excepcional para escrever, executar e debugar testes E2E, testes de integração e testes unitários.

### Características principais

- **Suporte multiplataforma**: Funciona em Chrome, Firefox, Edge e Electron

## Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Navegador web (Chrome, Firefox ou Edge)

## Baixar o projeto

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>

# Navegar para o diretório do projeto
cd cypress-T1606336
```

## Instalação de dependências

```bash
# Com npm
npm install

# Com pnpm
pnpm install
```

## Buildar

Este projeto não requer build tradicional, pois o Cypress é executado diretamente. No entanto, você pode verificar as dependências:

```bash
# Verificar que o Cypress foi instalado corretamente
npx cypress verify

# Ou a versão instalada
npm list cypress
```

## Abrir

### Cypress Test Runner (Modo Interativo)

Para abrir a interface gráfica do Cypress:

```bash
# Com npm
npm run open

# Ou diretamente com npx
npx cypress open
```

Isso abrirá a janela do Cypress Test Runner onde você pode:
- Selecionar navegadores disponíveis
- Visualizar e executar testes
- Debugar em tempo real

## Executar

### Modo Headless (CLI)

Para executar todos os testes sem interface gráfica:

```bash
# Com npm
npm test

# Ou especificamente
npm run test:e2e

# Com pnpm
pnpm test
```

### Executar arquivo específico

```bash
npx cypress run --spec "cypress/e2e/1-getting-started/todo.cy.js"
```

### Executar contra navegador específico

```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge
```

### Executar com relatório

```bash
# Gerar relatório Mochawesome
npx cypress run --reporter mochawesome
```

## Configuração

As configurações principais do Cypress estão em [cypress.config.js](cypress.config.js):

- **baseUrl**: URL base da aplicação a testar
- **viewportWidth/Height**: Dimensões da tela para os testes
- **Video**: Gravação de vídeos dos testes
- **Screenshot**: Captura de screenshots em caso de falha

## Scripts NPM

No arquivo [package.json](package.json), os seguintes scripts estão disponíveis:

```json
{
  "scripts": {
    "test": "cypress run",
    "test:e2e": "cypress run --spec cypress/e2e/**/*.cy.js",
    "open": "cypress open"
  }
}
```

## Escrevendo testes

Os testes devem estar na pasta `cypress/e2e/` e seguir o padrão de nomenclatura `*.cy.js`.

Exemplo básico:

```javascript
describe('Exemplo de teste', () => {
  beforeEach(() => {
    cy.visit('https://example.com')
  })

  it('deve conter um título', () => {
    cy.get('h1').should('contain', 'Welcome')
  })
})
```

## Documentação e Recursos

- [Documentação oficial Cypress](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [API Reference](https://docs.cypress.io/api/table-of-contents)
- [Exemplos Cypress](https://github.com/cypress-io/cypress-example-kitchensink)

## Licença

MIT

---

**Última atualização**: Janeiro de 2026
