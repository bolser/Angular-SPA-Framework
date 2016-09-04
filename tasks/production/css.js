'use strict';

// Modules
var autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    config = require('../config'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

// Build css
gulp.task('css', function() {
  return gulp.src(config.css.src)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 0.5%']
    }))
    .pipe(cleanCSS())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest(config.css.dest));
});