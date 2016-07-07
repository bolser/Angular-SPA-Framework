'use strict';

// Modules
var gulp = require('gulp'),
    paths = require('./paths'),
    watch = require('gulp-watch');

// Watch files
gulp.task('watch', function() {

  // Watch for css changes
  watch(paths.css.dir + '/**/*.scss', function() {
    return gulp.start('css');
  });

  // Watch for js changes
  watch(paths.js.dir + '/**/*.js', function() {
    return gulp.start('js');
  });
  
  // Watch for changes
  watch(paths.html.dir + '/**/*.html', function() {
    return gulp.start('html');
  });
  
  // Watch for image changes
  watch(paths.img.dir + '/**/*.*', function() {
    return gulp.start('images');
  });

});