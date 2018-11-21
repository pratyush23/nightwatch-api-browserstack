const { client } = require('nightwatch-api');
const userCreds = require('../support/userCredentials.json');
const bbcID = require('../pages/bbcId.js');

function emailSignin(user) {
  client.setValue(bbcID.elements.emailInput, userCreds[user].email);
  client.setValue(bbcID.elements.passwordInput, userCreds[user].password);
}

function signInViaUpsell(user) {
  client.click(bbcID.elements.signInLinkViaUpsell);
  emailSignin(user);
  client.click(bbcID.elements.submitButton);
}

module.exports = {
  signInViaUpsell
};
