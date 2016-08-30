'use strict';

// Modules
var config = require('../config'),
    gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');

// Build html
gulp.task('html', function() {    
  return gulp.src(config.html.src)
    .pipe(templateCache('templates.js',
      { module: 'app' }
    ))
    .pipe(gulp.dest(config.html.dest));
});