'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    rev = require('gulp-rev');

// Rev files
module.exports = function() {
  return gulp.src([
      config.css.dest + '/' + config.css.filename,
      config.js.dest + '/' + config.js.filename,
      config.jsLibs.dest + '/' + config.jsLibs.filename
    ], {base: config.compile.dest})
    .pipe(rev())
    .pipe(gulp.dest(config.compile.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.compile.temp));
}