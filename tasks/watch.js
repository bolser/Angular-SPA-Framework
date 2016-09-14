'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch');

// Watch files
module.exports = function() {

  // CSS changes
  watch(config.css.watch, function() {
    return runSequence('css');
  });

  // JS changes
  watch(config.js.watch, function() {
    return runSequence('js');
  });

  // HTML changes
  watch(config.html.watch, function() {
    return runSequence('html', 'js');
  });

  // Image changes
  watch(config.img.watch, function() {
    return runSequence('images');
  });

}