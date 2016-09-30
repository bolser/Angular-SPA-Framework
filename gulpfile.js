'use strict';

// Modules
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

// Register tasks
gulp.task('clean', require('./tasks/clean'));
gulp.task('fonts', require('./tasks/fonts'));
gulp.task('html', require('./tasks/html'));
gulp.task('index', require('./tasks/index'));
gulp.task('rev', require('./tasks/rev'));
gulp.task('watch', require('./tasks/watch'));

// Development tasks
gulp.task('css-development', require('./tasks/css').development);
gulp.task('images-development', require('./tasks/images').development);
gulp.task('js-development', require('./tasks/js').development);
gulp.task('js-libs-development', require('./tasks/js-libs').development);

// Production tasks
gulp.task('css-production', require('./tasks/css').production);
gulp.task('images-production', require('./tasks/images').production);
gulp.task('js-production', require('./tasks/js').production);
gulp.task('js-libs-production', require('./tasks/js-libs').production);

// Development build
gulp.task('default', function() {
  runSequence(
    'clean',
    'html',
    ['index', 'css-development', 'js-development', 'js-libs-development', 'images-development', 'fonts'],
    'watch'
  );
});

// Production build
gulp.task('production', function() {
  runSequence(
    'clean',
    'html',
    ['index', 'css-production', 'js-production', 'js-libs-production', 'images-production', 'fonts'],
    'rev'
  );
});

// Server
gulp.task('server', function() {
  gulp.task('browser-sync', require('./tasks/server'));
  gulp.start('browser-sync');
});