
// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'

//Ordenação dos selectors a partir do inspect do Cypress
Cypress.ElementSelector.defaults({
  selectorPriority: [
    'data-*',
    'id',
    'name',
    'attribute:role',
    'attribute:aria-labelledby',
    'class',
    'attributes',
  ],
})