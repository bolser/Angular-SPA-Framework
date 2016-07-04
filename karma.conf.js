module.exports = function(config) {
  config.set({

    // base path used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files/patterns to load in browser
    files: [
      './dist/js/libs.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './dist/js/app.min.js',
      './app/common/services/window-resize.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving to the browser
    preprocessors: {
    },

    // test results reporter - possible values: dots || progress
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable/disable colors in output (reporters & logs)
    colors: true,

    // logging level - values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable/disable file watching & auto text execution
    autoWatch: true,

    // start these browsers
    browsers: ['Chrome'],

    // continuous integration (capture browsers, runs tests & exit)
    singleRun: false,

    // how many browsers to start simultaneously
    concurrency: Infinity
    
  })
}