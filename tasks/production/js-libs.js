'use strict';

// Modules
var concat = require('gulp-concat'),
    config = require('../config'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify');

// Build js libs
gulp.task('js-libs', function() {
  return gulp.src(config.jsLibs.src)
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsLibs.dest));
});