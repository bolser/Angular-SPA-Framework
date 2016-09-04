'use strict';

// Modules
var config = require('../config'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

// Build css libs
gulp.task('css-libs', function() {
  return gulp.src(config.cssLibs.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('libs.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest));
});