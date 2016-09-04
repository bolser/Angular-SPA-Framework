'use strict';

// Modules
var config = require('../config'),
    cleanCSS = require('gulp-clean-css'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

// Build css libs
gulp.task('css-libs', function() {
  return gulp.src(config.cssLibs.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename('libs.min.css'))
    .pipe(gulp.dest(config.css.dest));
});