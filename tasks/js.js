'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    through = require('through2'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream');

// Development JS build
exports.development =  function() {
  return gulp
    .src(config.js.src)
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: config.js.filename
      }
    })).on('error', function() {
      this.emit('end');
    })
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(through.obj(function(file, enc, cb) {
      if (!/\.map$/.test(file.path)) {
        this.push(file);
      }
      cb();
    }))
    .pipe(ngAnnotate())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.js.dest));
}

// Production JS build
exports.production = function() {
  return gulp
    .src(config.js.src)
    .pipe(webpack({
      output: {
        filename: config.js.filename
      }
    }))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest));
}