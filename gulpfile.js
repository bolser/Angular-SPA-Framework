'use strict';

// Modules
var gulp = require('gulp');

// Development build (default)
gulp.task('default', function() {
  require('./tasks/development/build');
  gulp.start('build');
});

// Production build
gulp.task('production', function() {
  require('./tasks/production/build');
  gulp.start('build');
});