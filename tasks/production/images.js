'use strict';

// Modules
var config = require('../config'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

// Compress images
gulp.task('images', function() {
  return gulp.src(config.img.src)
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.jpegtran(),
      imagemin.optipng(),
      imagemin.svgo({
       plugins: [
         { removeUselessDefs: false },
         { cleanupIDs: false}
       ]
     })
    ]))
    .pipe(gulp.dest(config.img.dest));
});