'use strict';


// modules
// --------------------------------

var gulp = require('gulp'),
    paths = require('./paths'),
    watch = require('gulp-watch');


// watch files
// --------------------------------

gulp.task('watch', function() {

  // css changes
  watch(paths.css.dir + '/**/*.scss', function() {
    return gulp.start('css');
  });

  // js changes
  watch(paths.js.dir + '/**/*.js', function() {
    return gulp.start('js');
  });
  
  // html changes
  watch(paths.html.dir + '/**/*.html', function() {
    return gulp.start('html');
  });
  
  // img changes
  watch(paths.img.dir + '/**/*.*', function() {
    return gulp.start('images');
  });

});