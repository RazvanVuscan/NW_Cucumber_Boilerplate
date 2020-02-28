const commandsList = {
  // example of page object command
  // MUST USE FUNCTION HERE!!! - An arrow function expression has a shorter syntax compared to function expressions and does not bind its own this, arguments, super, or new.target.
  waitForPageToLoad: function() {
    return this.waitForElementVisible('@versionSelector')
      .expect.title()
      .to.contain(this.api.globals.pageTitle); // this is how to call variables from global.js file
  }
};

module.exports = {
  url: 'https://nightwatchjs.org',
  commands: [commandsList],
  sections: {
    // use of sections in page objects
    topSection: {
      selector: '#navigation',
      index: 0, // use the first element in case there are multiple ones on the page,
      timeout: 999, // used to overwrite the default timeout for when using waitForElement* commands or assertions
      retryInterval: 30, // used to overwrite the default retry interval for when using waitForElement* commands or assertions
      abortOnFailure: false, // used to overwrite this setting when using waitForElement* commands
      suppressNotFoundErrors: true, // Some element commands like .click() or .getText() will throw a NoSuchElement error if the element cannot be located, causing the test to fail.
      elements: {
        logo: '.logo-home'
      }
    }
  },
  elements: {
    // rest of elements on the page
    versionSelector: '#navbar-toprightindex .version-dropdown'
  }
};
