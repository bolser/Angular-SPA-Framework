'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    rev = require('gulp-rev'),
    revCSSurl = require('gulp-rev-css-url'),
    revDel = require('gulp-rev-delete-original'),
    revReplace = require('gulp-rev-replace'),
    runSequence = require('run-sequence');

// Rev files
gulp.task('rev-files', function() {
  return gulp.src([
      config.css.dest + '/' + config.css.filename,
      config.img.dest + '/**/*.*',
      config.js.dest + '/' + config.js.filename,
      config.jsLibs.dest + '/' + config.jsLibs.filename
    ], {base: config.compile.dest})
    .pipe(rev())
    .pipe(revCSSurl())
    .pipe(revDel())
    .pipe(gulp.dest(config.compile.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.compile.temp));
});

// Rev references
gulp.task('rev-references', function() {
  return gulp.src('./index.html')
    .pipe(revReplace({
      manifest: gulp.src(config.compile.temp + '/rev-manifest.json')
    }))
    .pipe(gulp.dest(config.compile.dest));
});

// Production file revisioning
exports.production = function() {
  return runSequence('rev-files', 'rev-references');
}

// Development file revisioning
exports.development = function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest(config.compile.dest));
}