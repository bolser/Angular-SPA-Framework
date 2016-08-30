'use strict';

// Modules
var config = require('../config'),
    gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream');

// Build js
gulp.task('js', function() {
  return gulp.src(config.js.src)
    .pipe(webpack({
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest));
});