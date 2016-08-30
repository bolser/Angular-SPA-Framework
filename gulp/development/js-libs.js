'use strict';

// Modules
var concat = require('gulp-concat'),
    config = require('../config'),
    gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps');

// Build js libs
gulp.task('js-libs', function() {
  return gulp.src(config.jsLibs.src)
    .pipe(sourcemaps.init())
    .pipe(concat('libs.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.jsLibs.dest));
});