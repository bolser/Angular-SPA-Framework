'use strict';

// Modules
var concat = require('gulp-concat'),
    gulp = require('gulp'),
    paths = require('./paths'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

// Build js libs
gulp.task('js-libs', function() {
  return gulp.src(paths.jsLibs.src)
    .pipe(sourcemaps.init())
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.jsLibs.dest));
});