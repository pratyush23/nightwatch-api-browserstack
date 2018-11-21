const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const mySounds = require('../pages/mySounds.js');
const signInUsers = require('../support/signIn.js');

Given(/^I am on the My Sounds page$/, () => {
  return client.url(mySounds.url());
});

Then(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text);
});

Then(/^the upsell title is "(.*?)"$/, (text) => {
  return client.expect.element(mySounds.elements.heading).text.to.equal(text);
});

When(/^I am signed in as "(.*?)" via upsell$/, (user) => {
  return signInUsers.signInViaUpsell(user);

});

Then('I am taken to latest page', () => {
  return client.expect.element(mySounds.elements.selectedsubNav).text.to.equal('Latest');
});
