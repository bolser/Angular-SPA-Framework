'use strict';


// modules
// --------------------------------

var del = require('del'),
    gulp = require('gulp');


// clean
// --------------------------------

gulp.task('clean', function() {
  return del('dist');
});