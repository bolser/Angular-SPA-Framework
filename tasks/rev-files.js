'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    rev = require('gulp-rev'),
    revDel = require('gulp-rev-delete-original');

// Rev files
module.exports = function() {
  return gulp.src([
      config.css.dest + '/' + config.css.filename,
      config.js.dest + '/' + config.js.filename,
      config.jsLibs.dest + '/' + config.jsLibs.filename
    ], {base: config.compile.dest})
    .pipe(rev())
    .pipe(revDel())
    .pipe(gulp.dest(config.compile.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.compile.temp));
}