'use strict';

// Modules
var browserSync = require("browser-sync").create(),
    fallback = require('connect-history-api-fallback'),
    gulp = require('gulp'),
    log = require('connect-logger');

// Serve with browser sync
module.exports = function() {

  // Browser sync config
  var config = {
    injectChanges: true,
    files: ['./**/*.{html,css,js,png,jpg,svg,gif}'],
    watchOptions: {
      ignored: [
        'bower_components',
        'node_modules',
        '.tmp/**/*.*',
        'src/**/*.*',
        'app/**/*.*'
      ]
    },
    server: {
      baseDir: './',
       middleware: [
        log({ format: '%date %status %method %url' }),
        fallback({
          index: '/index.html',
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
        })
      ]
    }
  }

  // Initialise browser sync
  browserSync.init(config);
}