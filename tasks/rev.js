'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    RevAll = require('gulp-rev-all');

// Rev all files and references
module.exports = function() {
  return gulp
    .src(config.compile.dest + '/**')
    .pipe(RevAll.revision({
      dontGlobal: config.rev.dontGlobal,
      dontRenameFile: config.rev.dontRenameFile
    }))
    .pipe(gulp.dest(config.compile.dest));
}