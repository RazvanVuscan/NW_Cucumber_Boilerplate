const googlePage = require('../../helpers/pageElementsLibrary/googlePage');
const variables = require('../../helpers/variableStorage');

module.exports = {
  // vanilla Nightwatch example

  'Navigate to Google': client => {
    client
      .url('https://www.google.com')
      .waitForElementVisible(googlePage.body())
      .expect.title()
      .to.contain('Google');

    client.getTitle(title => {
      variables.pageTitle = title;
      console.log('Title is -----> ', variables.pageTitle);
    });

    client.setValue(googlePage.searchField(), 'aaaaaaaa');
  }
};
