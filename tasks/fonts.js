'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp');

// Process fonts
module.exports = function() {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
}