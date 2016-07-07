'use strict';

// Modules
var cleanCSS = require('gulp-clean-css'),
    gulp = require('gulp'),
    paths = require('./paths'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

// Build css libs
gulp.task('css-libs', function() {
  return gulp.src(paths.cssLibs.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('libs.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css.dest));
});