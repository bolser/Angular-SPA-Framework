'use strict';

// Modules
var concat = require('gulp-concat'),
    config = require('./config'),
    gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

// Development JS libs build
exports.development = function() {
  return gulp.src(config.jsLibs.src)
    .pipe(sourcemaps.init())
    .pipe(concat('libs.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.jsLibs.dest));
}

// Production JS libs build
exports.production = function() {
  return gulp.src(config.jsLibs.src)
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsLibs.dest));
}