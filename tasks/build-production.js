'use strict';


// modules
// --------------------------------

var gulp = require('gulp'),
    runSequence = require('run-sequence');


// tasks
// --------------------------------

require('./clean');
require('./css');
require('./css-libs');
require('./fonts');
require('./html');
require('./images');
require('./js');
require('./js-libs');


// build
// --------------------------------

gulp.task('build-production', function() {
  return runSequence(
    'clean',
    'html',
    ['css', 'css-libs', 'js', 'js-libs', 'images']
  );
});