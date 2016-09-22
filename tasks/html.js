'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    angularTemplateCache = require('gulp-angular-templatecache');

// HTML template build
module.exports = function() {
  return gulp.src(config.html.src)
    .pipe(angularTemplateCache('templates.js', {
      module: config.html.module,
      root: root
    }))
    .pipe(gulp.dest(config.compile.temp));
}