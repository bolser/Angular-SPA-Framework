'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    revReplace = require('gulp-rev-replace');

// Rev file references
module.exports = function() {
  var manifest = gulp.src(config.compile.temp + '/rev-manifest.json');

  return gulp.src('./index.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.compile.dest));
}