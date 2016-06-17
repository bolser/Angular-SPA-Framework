'use strict';


// modules
// --------------------------------

var gulp = require('gulp'),
    paths = require('./paths'),
    templateCache = require('gulp-angular-templatecache');


// build html
// --------------------------------

gulp.task('html', function() {    
  return gulp.src(paths.html.src)
    .pipe(templateCache('templates.js',
      { module: 'app' }
    ))
    .pipe(gulp.dest(paths.html.dest));
});