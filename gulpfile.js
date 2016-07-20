'use strict';

// Modules
var gulp = require('gulp');

// Default (development) build
gulp.task('default', function() {
  require('./tasks/build-development');
  gulp.start('build-development');
});

// Production build
gulp.task('production', function() {
  require('./tasks/build-production');
  gulp.start('build-production');
});