'use strict';

// Modules
var config = require('../config'),
    gulp = require('gulp'),
    watch = require('gulp-watch');

// Watch files
gulp.task('watch', function() {

  // Watch for css changes
  watch(config.css.dir + '/**/*.scss', function() {
    return gulp.start('css');
  });

  // Watch for js changes
  watch(config.js.dir + '/**/*.js', function() {
    return gulp.start('js');
  });
  
  // Watch for changes
  watch(config.html.dir + '/**/*.html', function() {
    return gulp.start('html');
  });
  
  // Watch for image changes
  watch(config.img.dir + '/**/*.*', function() {
    return gulp.start('images');
  });

});