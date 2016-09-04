'use strict';

// Modules
var config = require('../config'),
    gulp = require('gulp');

// Compress images
gulp.task('images', function() {
  return gulp.src(config.img.src)
    .pipe(gulp.dest(config.img.dest));
});