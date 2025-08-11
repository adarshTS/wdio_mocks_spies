export const config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: "hub.browserstack.com",
  specs: ["./test/specs/**/*.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--start-maximized"],
      },
      "bstack:options": {
        browserVersion: "latest",
        os: "Windows",
        osVersion: "11",
        seleniumVersion: "4.22.0",
        seleniumBidi: true,
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 15000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [
    [
      "browserstack",
      { browserstackLocal: true, opts: { forcelocal: false } },
      {
        testObservabilityOptions: {
          buildName: "WDIO Mocks and Spies",
          projectName: "WDIO Mocks and Spies",
        },
      },
    ],
  ],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
