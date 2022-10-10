const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // versoes novas do cypress utiliza esse arquivo e não mais no fixtures
    baseUrl: 'http://lojaebac.ebaconline.art.br/'
  },
});
