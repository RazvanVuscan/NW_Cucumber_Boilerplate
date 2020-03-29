module.exports = {
  src_folders: ['tests'], // Tests folder for Nightwatch tests
  globals_path: 'globals.js', // Globals file - KEEP THIS EXACT FORMATTING FOR THE FILE LOCATION FOR IT TO WORK!!!
  page_objects_path: './page_objects',
  test_workers: {
    //run in parallel. set to false for sequential
    enabled: true,
    workers: 'auto'
  },
  test_settings: {
    // A default environment is always required from which the other environments inherit the settings.
    // We can overwrite any test setting for each environment as needed.
    default: {
      // A default environment is always required from which the other environments inherit the settings.
      // We can overwrite any test setting for each environment as needed.
      // launch_url: 'https://nightwatchjs.org', // default launch url if not specified in a page object
      screenshots: {
        enabled: true,
        on_failure: true,
        path: './tests_output/screenshots/nightwatch'
      }
    },
    seleniumConfig: {
      // this is the main runner for Nightwatch.
      // can be renamed
      selenium: {
        // An object containing Selenium Server related configuration options. Selenium is only required when testing against a Grid setup or a cloud testing service
        start_process: true,
        port: 4445,
        server_path: require('selenium-server').path,
        log_path: './tests_output/seleniumLogs',
        cli_args: {
          'webdriver.gecko.driver': require('geckodriver').path,
          'webdriver.chrome.driver': require('chromedriver').path
        }
      }
    },
    chrome: {
      extends: 'seleniumConfig',
      desiredCapabilities: {
        browserName: 'chrome',
        acceptSslCerts: true,
        chromeOptions: {
          w3c: false, //needed because otherwise unescaped characters error appears! (https://github.com/nightwatchjs/nightwatch/issues/2126)
          args: [
            'start-fullscreen', //for Mac
            'start-maximized', //for Windows
            'disable-infobars',
            'disable-web-security',
            'safebrowsing-disable-download-protection'
          ]
        }
      }
    },
    firefox: {
      extends: 'seleniumConfig',
      windowSize: 'maximize',
      desiredCapabilities: {
        browserName: 'firefox',
        acceptSslCerts: true,
        javascriptEnabled: true,
        'moz:firefoxOptions': {
          // args: ['--headless', '--width=1800', '--height=1000']
        }
      }
    },
    local_docker: {
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      start_process: false,
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
};
