'use strict';

// Modules
var gulp = require('gulp'),
    paths = require('./paths'),
    templateCache = require('gulp-angular-templatecache');

// Build html
gulp.task('html', function() {    
  return gulp.src(paths.html.src)
    .pipe(templateCache('templates.js',
      { module: 'app' }
    ))
    .pipe(gulp.dest(paths.html.dest));
});