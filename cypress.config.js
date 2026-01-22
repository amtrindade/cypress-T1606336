const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/results-[hash].xml',
    reportDir: 'cypress/reports/html',
    charts: true,
    reportPageTitle: 'Relatório de testes Curso Target Cypress',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: 'https://antoniotrindade.com.br/treinoautomacao',
    defaultCommandTimeout: 4000,
  },
  video: false,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true,
  retries: {
    runMode: 0,
    openMode: 0
  }
});
