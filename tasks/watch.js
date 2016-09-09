'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch');

// Watch files
module.exports = function() {

  // CSS changes
  watch(config.css.dir + '/**/*.scss', function() {
    return runSequence('css');
  });

  // JS changes
  watch(config.js.dir + '/**/*.js', function() {
    return runSequence('js');
  });

  // HTML changes
  watch(config.html.dir + '/**/*.html', function() {
    return runSequence('html', 'js');
  });

  // Image changes
  watch(config.img.dir + '/**/*.*', function() {
    return runSequence('images');
  });

}