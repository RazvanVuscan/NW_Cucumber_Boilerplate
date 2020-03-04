module.exports = {
  // page object example
  'Navigate to Nightwatch and switch to oldest version': client => {
    const homepage = client.page.nightwatchHomepage();
    const topSection = homepage.section.topSection;

    homepage.navigate().waitForPageToLoad();

    topSection.expect.element('@logo').to.be.visible;

    homepage
      .click('@versionSelector')
      .click(
        `${homepage.elements.versionSelector.selector} option[value='0.9.21']` // composed selector
      )
      .waitForElementVisible('@smallLogo')
      .assert.urlContains('v09.');
  }
};
