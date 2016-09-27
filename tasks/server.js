'use strict';

// Modules
var browserSync = require('browser-sync').create(),
    config = require('./config'),
    fallback = require('connect-history-api-fallback'),
    gulp = require('gulp'),
    log = require('connect-logger');

// Serve with browser sync
module.exports = function() {

  // Browser sync config
  var options = {
    injectChanges: config.server.injectChanges,
    files: config.server.watchFiles,
    watchOptions: {
      ignored: config.server.ignoreFiles
    },
    server: {
      baseDir: config.compile.dest,
       middleware: [
        log({
          format: '%date %status %method %url'
        }),
        fallback({
          index: '/index.html',
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
        })
      ]
    }
  }

  // Initialise browser sync
  browserSync.init(options);
}