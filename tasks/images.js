'use strict';

// Modules
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    paths = require('./paths');

// Compress images
gulp.task('images', function() {
  return gulp.src(paths.img.src)
    .pipe(imagemin().on('error', gutil.log))
    .pipe(gulp.dest(paths.img.dest));
});