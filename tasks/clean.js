'use strict';

// Modules
var del = require('del'),
    gulp = require('gulp');

// Clean
gulp.task('clean', function() {
  return del('dist');
});