module.exports = {
  'Navigate to Google': client => {
    client
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .expect.title()
      .to.contain('Google');
  }
};
