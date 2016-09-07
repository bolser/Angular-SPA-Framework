'use strict';

// Modules
var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Development build
gulp.task('default', function() {
  registerTasks('development');
  runSequence(
    'clean',
    'html',
    ['css', 'css-libs', 'js', 'js-libs', 'images'],
    'watch'
  );
});

// Production build
gulp.task('production', function() {
  registerTasks('production');
  runSequence(
    'clean',
    'html',
    ['css', 'css-libs', 'js', 'js-libs', 'images']
  );
});

// Register tasks
function registerTasks(env) {
  gulp.task('clean', require('./tasks/clean'));
  gulp.task('css', require('./tasks/css')[env]);
  gulp.task('css-libs', require('./tasks/css-libs')[env]);
  gulp.task('fonts', require('./tasks/fonts'));
  gulp.task('html', require('./tasks/html'));
  gulp.task('images', require('./tasks/images')[env]);
  gulp.task('js', require('./tasks/js')[env]);
  gulp.task('js-libs', require('./tasks/js-libs')[env]);
  gulp.task('watch', require('./tasks/watch'));
}