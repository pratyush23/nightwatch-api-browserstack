const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const Google = require('../pages/google.js');

Given(/^I am on the Google page$/, () => {
  return client.url(google.url());
});
