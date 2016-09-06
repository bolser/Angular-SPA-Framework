'use strict';

// Modules
var config = require('./config'),
    cleanCSS = require('gulp-clean-css'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

// Development CSS libs build
exports.development = function() {
  return gulp.src(config.cssLibs.src)
    .pipe(sass())
    .pipe(rename('libs.min.css'))
    .pipe(gulp.dest(config.css.dest));
}

// Production CSS libs build
exports.production = function() {
  return gulp.src(config.cssLibs.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename('libs.min.css'))
    .pipe(gulp.dest(config.css.dest));
}