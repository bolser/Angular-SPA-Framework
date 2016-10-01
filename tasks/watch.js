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
    return runSequence('css-development');
  });

  // JS
  watch(config.js.watch, function() {
    return runSequence('js-development');
  });

  // HTML
  watch(config.html.watch, function() {
    return runSequence('html', 'js-development');
  });

  // Images
  watch(config.img.watch, function() {
    return runSequence('images-development');
  });

  // Index
  watch(config.index.watch, function() {
    return runSequence('index');
  });
}