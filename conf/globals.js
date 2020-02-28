module.exports = {
  // adding a subsection like firefox: {} and populating it with variables will enable consumption of them strictly by the firefox env configuration.
  // the rest of the runner configs can be left out of the section and will be picked up anyway.
  // see this post for details - https://github.com/nightwatchjs/nightwatch/issues/586
  // firefox: {
  //   pageTitle: 'test_title'
  // },

  // leaving without any subsections will make these available to ALL the runners.
  pageTitle: 'Nightwatch',
  // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  abortOnAssertionFailure: true,

  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval: 500,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout: 5000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned: false,

  // By default a warning is printed if multiple elements are found using the given locate strategy
  // and selector; set this to true to suppress th  ose warnings
  suppressWarningsOnMultipleElementsReturned: false,

  // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout: 10000,

  // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
  // or an error is thrown
  unitTestsTimeout: 2000,

  // controls the timeout value for when executing the global async reporter. Expects the done() callback to be
  // invoked within this time or an error is thrown
  customReporterCallbackTimeout: 20000,

  // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions
  // until a given timeout is reached, before the test runner gives up and fails the test.
  retryAssertionTimeout: 5000,

  // External before hook is ran at the beginning of the tests run, before creating the Selenium session
  before: () => {
    console.log('START FROM GLOBALS!');
  },

  // External after hook is ran at the very end of the tests run, after closing the Selenium session
  after: () => {
    console.log('END FROM GLOBALS!');
  },

  // // This will be run before each test suite is started
  // beforeEach: (browser, done) => {
  //   // getting the session info
  //   browser.status(function (result) {
  //     console.log(result.value);
  //     done();
  //   });
  // },
  //
  // // This will be run after each test suite is finished
  // afterEach: (browser, done) => {
  //   console.log(browser.currentTest);
  //   done();
  // },
  //
  // // Custom reporter
  // reporter: function(results, done) {
  //   console.log('RESULTS\n', results);
  //   done();
  // }
};
