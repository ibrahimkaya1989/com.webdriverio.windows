exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
      './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
      platformName: "Windows",
      "appium:deviceName": "WindowsPC",
      "appium:automationName": "Windows",
      "appium:app": "Microsoft.WindowsCalculator_8wekyb3d8bbwe!App"  // Windows Calculator'ın App ID'si
    }],
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
    reporters: ['spec'],

    hostname: '127.0.0.1', // Appium default host
    port: 4723, // Appium default port
    path: '/wd/hub', // Appium default path for v1.22.3
    

    /* Appium Configuration for v1.22.3 */
    /*
    services: [
      ['appium', {
          command: 'appium', // This ensures the globally installed version is used
          args: {
              // Specify custom arguments to the appium server here
              address: '127.0.0.1',
              basePath: '/wd/hub',
              port: 4723,
              allowInsecure: 'adb_shell',
              relaxedSecurity: true,
          }
      }]
    ],
    */

    /* Appium Configuration for v2.x */
    /*
    services: [
      ['appium', {
          command: 'appium', // This ensures the globally installed version is used
          args: {
              // Specify custom arguments to the appium server here
              address: '127.0.0.1',
              basePath: '/wd/hub',
              port: 4723,
              allowInsecure: 'adb_shell',
              relaxedSecurity: true,
              usePlugins: 'device-farm',
              pluginDeviceFarmPlatform: 'both',
              keepAliveTimeout: 800,
          }
      }]
    ],
    */
    
  };
  