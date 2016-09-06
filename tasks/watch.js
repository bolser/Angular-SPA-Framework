'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    watch = require('gulp-watch');

// Watch files
module.exports = function() {

  // CSS changes
  watch(config.css.dir + '/**/*.scss', function() {
    return gulp.start('css');
  });

  // JS changes
  watch(config.js.dir + '/**/*.js', function() {
    return gulp.start('js');
  });

  // HTML changes
  watch(config.html.dir + '/**/*.html', function() {
    return gulp.start('html');
  });

  // Image changes
  watch(config.img.dir + '/**/*.*', function() {
    return gulp.start('images');
  });

}