const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  fullyParallel: true,
  retries: 0,
  reporter: [['html']],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' }
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' }
    }
  ]

});
