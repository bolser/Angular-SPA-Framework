'use strict';

// Modules
var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Tasks
require('./clean');
require('./css');
require('./css-libs');
require('./fonts');
require('./html');
require('./images');
require('./js');
require('./js-libs');

// Build
gulp.task('build-production', function() {
  return runSequence(
    'clean',
    'html',
    ['css', 'css-libs', 'js', 'js-libs', 'images']
  );
});