'use strict';

// Modules
var config = require('../config'),
    gulp = require('gulp');

// Copy fonts
gulp.task('fonts', function() {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});