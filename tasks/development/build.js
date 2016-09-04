'use strict';

// Modules
var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Tasks
require('./clean');
require('./css').development();
require('./css-libs');
require('./html');
require('./images');
require('./js');
require('./js-libs');
require('./watch');

// Build
gulp.task('build', function() {
  return runSequence(
    'css'
    /*
    'clean',
    'html',
    ['css', 'css-libs', 'js', 'js-libs', 'images'],
    'watch'
    */
  );
});