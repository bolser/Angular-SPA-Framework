'use strict';

// Modules
var del = require('del'),
    gulp = require('gulp');

// Empty distribution directory
gulp.task('clean', function() {
  return del('dist');
});