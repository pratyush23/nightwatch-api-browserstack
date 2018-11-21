const { setDefaultTimeout, AfterAll, BeforeAll } = require('cucumber');
const { createSession, closeSession } = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll( () => {
    createSession({ env: 'default' });
});

AfterAll( () => {
	console.log("In after");
    closeSession();
});
