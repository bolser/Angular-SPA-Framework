'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch');

// Watch files
module.exports = function() {

  // CSS
  watch(config.css.watch, function() {
    return runSequence('css');
  });

  // JS
  watch(config.js.watch, function() {
    return runSequence('js');
  });

  // HTML
  watch(config.html.watch, function() {
    return runSequence('html', 'js');
  });

  // Images
  watch(config.img.watch, function() {
    return runSequence('images');
  });

  // Index
  watch('./index.html', function() {
    return runSequence('rev');
  });
}