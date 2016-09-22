'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    angularTemplateCache = require('gulp-angular-templatecache');

// HTML template build
module.exports = function() {
  return gulp.src(config.html.src)
    .pipe(angularTemplateCache(config.html.filename, {
      module: config.html.module,
      root: config.html.root
    }))
    .pipe(gulp.dest(config.compile.temp));
}