const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^I open Google's search page$/, async () => {
  await client.url('http://google.com').waitForElementVisible('body');
});

Then(/^The title is "([^"]*)"$/, async title => {
  await client.assert.title(title);
});

Then(/^The Google search form exists$/, async () => {
  await client.assert.visible('input[name="q"]');
});

When(/^I type "([^"]*)" in the search box$/, async input => {
  await client.setValue(
    { selector: 'input[name="q"]', abortOnFailure: false }, //demonstrate abort on failure set to false -  test will not fail when this step breaks
    input
  );
});

When(/^I submit the search$/, async () => {
  await client.keys(client.Keys.ENTER);
});
