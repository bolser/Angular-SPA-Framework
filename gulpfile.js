'use strict';

// Modules
var gulp = require('gulp');

// Tasks
gulp.task('default', function() {
  require('./tasks/build-development');
  gulp.start('build-development');
});

gulp.task('production', function() {
  require('./tasks/build-production');
  gulp.start('build-production');
});