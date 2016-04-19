'use strict';


// config
// --------------------------------

var config = {
  css: {
    entry: './assets/sass/all.scss',
    dest: './dist/css',
    dir: './assets/sass'
  },
  js: {
    entry: './app/all.js',
    dest: './dist/js',
    dir: './app'
  },
  jsLibs: {
    entry: [
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/angular-animate/angular-animate.js'
    ],
    dest: './dist/js'
  },
  img: {
    dest: './dist/img',
    dir: './assets/img'
  }
};


// modules
// --------------------------------

var autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    webpack = require('gulp-webpack');


// clean
// --------------------------------

gulp.task('clean', function() {
  return del([
    config.css.dest,
    config.js.dest,
    config.jsLibs.dest,
    config.img.dest
  ]);
});


// build css
// --------------------------------

gulp.task('build-css', function() {
  return gulp.src(config.css.entry)
    .pipe(concat('app.min.css'))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.css.dest));
});


// build js
// --------------------------------

gulp.task('build-js', function() {
  return gulp.src(config.js.entry)
    .pipe(webpack({
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest));
});


// build js libs
// --------------------------------

gulp.task('build-js-libs', function() {
  return gulp.src(config.jsLibs.entry)
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsLibs.dest));
});


// compress images
// --------------------------------

gulp.task('compress-imgs', function() {
  return gulp.src(config.img.dir + '/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.img.dest));
});


// watch for file changes
// --------------------------------

gulp.task('watch-files', function() {

  //watch css changes
  gulp.watch(config.css.dir  + '/**', function() {
    gulp.start('build-css');
  });

  //watch js changes
  gulp.watch(config.js.dir  + '/**', function() {
    gulp.start('build-js');
  });

});


// default task
// --------------------------------

gulp.task('default', ['clean'], function() {
  gulp.start('build-css');
  gulp.start('build-js');
  gulp.start('build-js-libs');
  gulp.start('compress-imgs');
  gulp.start('watch-files');
});