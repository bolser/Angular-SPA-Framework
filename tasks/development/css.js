'use strict';

// Modules
var config = require('../config'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

// Build css
exports.development = function() {
  gulp.task('css', function() {
    return gulp.src(config.css.src)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('app.min.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.css.dest));
  });
}