import { defineConfig } from 'cypress';

const e2e = {
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },
  suite: {
    baseUrl: 'https://demo.nopcommerce.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    integrationFolder: 'cypress/e2e',
    testFiles: [
      'cypress/e2e/tests/LoginPageTests.cy.ts'
    ],
    video: false,
    screenshotsFolder: 'cypress/screenshots',
    chromeWebSecurity: false,
  },
};

const env = {
  url: 'https://demo.nopcommerce.com',
  loginUrl: 'https://demo.nopcommerce.com/login/',
  username: 'romanRiquelme@gmail.com',
  password: 'romanRiquelme',
};

export = defineConfig({ e2e, env });
