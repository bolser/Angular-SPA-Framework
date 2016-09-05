'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');

// HTML template build
module.exports = function() {
  return gulp.src(config.html.src)
    .pipe(templateCache('templates.js',
      { module: 'app' }
    ))
    .pipe(gulp.dest(config.html.dest));
}