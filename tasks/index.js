'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp');

// Process index
module.exports = function() {
  return gulp
    .src(config.index.src)
    .pipe(gulp.dest(config.compile.dest));
}