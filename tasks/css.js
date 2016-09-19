'use strict';

// Modules
var autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    config = require('./config'),
    importCSS = require('gulp-import-css'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

// Development CSS build
exports.development = function() {
  return gulp.src(config.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(importCSS())
    .pipe(rename(config.css.filename))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest));
}

// Production CSS build
exports.production = function() {
  return gulp.src(config.css.src)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 0.5%']
    }))
    .pipe(importCSS())
    .pipe(cleanCSS())
    .pipe(rename(config.css.filename))
    .pipe(gulp.dest(config.css.dest));
}