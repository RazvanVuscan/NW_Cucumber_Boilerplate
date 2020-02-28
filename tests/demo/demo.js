module.exports = {
  // page object example
  'Navigate to Nightwatch': client => {
    const homepage = client.page.nightwatchHomepage();
    const topSection = homepage.section.topSection;
    homepage.navigate().waitForPageToLoad();

    topSection.expect.element('@logo').to.be.visible;
  },

  // vanilla NW example
  'Switch to oldest version': client => {
    const homepage = client.page.nightwatchHomepage();

    // client.verify.title('abc'); // uncomment to see verify in action, failing the test at the end

    homepage
      .click('@versionSelector')
      .click(
        `${homepage.elements.versionSelector.selector} option[value='0.9.21']` // composed selector
      )
      .waitForElementVisible('.logo-small')
      .end();
  }
};
