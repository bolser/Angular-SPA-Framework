'use strict';

// Modules
var gulp = require('gulp'),
    paths = require('./paths');

// Copy fonts
gulp.task('fonts', function() {
  if (paths.fonts.src) {
    return gulp.src(paths.fonts.src)
      .pipe(gulp.dest(paths.fonts.dest));
  }
});