module.exports = function(config) {
  config.set({

    // Base path used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // Frameworks to use
    frameworks: ['jasmine'],

    // List of files & patterns to load in browser
    files: [

      // Libs
      'dist/js/libs.min.js',
      'dist/js/app.min.js',
      'node_modules/angular-mocks/angular-mocks.js',

      // Services
      'app/common/services/after-event.service.spec.js',
      'app/common/services/http-interceptor.service.spec.js',
      'app/common/services/placeholder-support.service.spec.js',

      // Directives
      'app/common/directives/email-mask.directive.spec.js',
      'app/common/directives/placeholder.directive.spec.js'
    ],

    // Files to exclude
    exclude: [],

    // Preprocess matching files before serving to the browser
    preprocessors: {},

    // Test results reporter: dots || progress
    reporters: ['mocha'],

    // Web server port
    port: 9876,

    // Enable colors in reporters & logs output
    colors: true,

    // Logging level: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Enable file watching & auto text execution
    autoWatch: true,

    // Start these browsers
    browsers: ['PhantomJS'],

    // Configure phantomjs
    phantomjsLauncher: {
      exitOnResourceError: true
    },

    // Continuous integration (capture browsers, runs tests & exit)
    singleRun: false,

    // How many browsers to start simultaneously
    concurrency: Infinity
  });
}