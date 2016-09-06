'use strict';

// Modules
var config = require('./config'),
    gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    through = require('through2'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream');

// Development JS build
exports.development =  function() {
  return gulp.src(config.js.src)
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(through.obj(function (file, enc, cb) {
      var isSourceMap = /\.map$/.test(file.path);
      if (!isSourceMap) this.push(file);
      cb();
    }))
    .pipe(ngAnnotate())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.js.dest));
}

// Production JS build
exports.production = function() {
  return gulp.src(config.js.src)
    .pipe(webpack({
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest));
}