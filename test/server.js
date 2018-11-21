const { startWebDriver, stopWebDriver } = require('nightwatch-api');

startWebDriver('default').catch((err) => console.log(err));

process.once('SIGTERM', async () => {
  try {
    await stopWebDriver();
  } finally {
    process.exit();
  }
});
