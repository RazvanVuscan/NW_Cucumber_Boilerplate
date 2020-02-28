module.exports = {
  'Navigate to Google': client => {
    client
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .expect.title()
      .to.contain('Google');
  }
};
