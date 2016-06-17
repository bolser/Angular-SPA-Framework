'use strict';


// modules
// --------------------------------

var gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    paths = require('./paths'),
    sourcemaps = require('gulp-sourcemaps'),
    through = require('through2'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream');


// build js
// --------------------------------

gulp.task('js', function() {
  return gulp.src(paths.js.src)
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
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.js.dest));
});