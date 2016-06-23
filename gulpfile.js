'use strict';


// modules
// --------------------------------

var gulp = require('gulp');


// tasks
// --------------------------------

gulp.task('default', function() {
  require('./tasks/build-development');
  gulp.start('build-development');
});

gulp.task('production', function() {
  require('./tasks/build-production');
  gulp.start('build-production');
});