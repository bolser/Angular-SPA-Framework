'use strict';

// Modules
var gulp = require('gulp');

// Development build (default)
gulp.task('default', function() {
  require('./gulp/development/build');
  gulp.start('build');
});

// Production build
gulp.task('production', function() {
  require('./gulp/production/build');
  gulp.start('build');
});