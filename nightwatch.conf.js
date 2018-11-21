const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  "page_objects_path" : "features/pages/",
  "selenium" : {
        "start_process" : true,
        "server_path" : "selenium-server-standalone-3.9.1.jar",
        "log_path" : "",
        "host" : "127.0.0.1",
        "port" : 4444,
    },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      }
    },
    chrome: {
      webdriver: {
        server_path: chromedriver.path
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['disable-gpu']
        }
      }
    },
    firefox: {
      webdriver: {
        server_path: geckodriver.path
      },
      desiredCapabilities: {
        browserName: 'firefox',
        marionette: true
      }
    }
  }
};
