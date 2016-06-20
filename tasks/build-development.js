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
require('./watch');


// build
// --------------------------------

gulp.task('build-development', function() {
  return runSequence(
    'clean',
    'html',
    ['css', 'css-libs', 'js', 'js-libs', 'images'],
    'watch'
  );
});

gulp.start('build-development');