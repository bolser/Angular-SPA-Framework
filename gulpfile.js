'use strict';


// paths
// --------------------------------

var paths = {
  css: {
    entry: './app/assets/sass/config/config.scss',
    dest: './dist/css',
    dir: './app/assets/sass'
    
  },
  js: {
    entry: './app/config.js',
    dest: './dist/js',
    dir: './app'
  },
  jsLibs: {
    dest: './dist/js',
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/angular-animate/angular-animate.js'
    ]
  },
  img: {
    dest: './dist/img',
    dir: './app/assets/img'
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
    livereload = require('gulp-livereload'),
    pngquant = require('imagemin-pngquant'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    webpack = require('gulp-webpack');


// clean files
// --------------------------------

gulp.task('clean-files', function() {
  return del([
    paths.css.dest, 
    paths.js.dest,
    paths.jsLibs.dest,
    paths.img.dest
  ]);
});


// build css
// --------------------------------

gulp.task('build-css', function() {
  return gulp.src(paths.css.entry)
    .pipe(concat('app.min.css'))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.css.dest))
    .pipe(livereload());
});


// build js
// --------------------------------

gulp.task('build-js', function() {
  return gulp.src(paths.js.entry)
		.pipe(webpack({
  		output: {
    		filename: 'app.min.js'
  		}
		}))
		.pipe(uglify())
		.pipe(gulp.dest(paths.js.dest))
    .pipe(livereload());
});


// build js libs
// --------------------------------

gulp.task('build-js-libs', function() {
  return gulp.src(paths.jsLibs.files)
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.jsLibs.dest))
    .pipe(livereload());
});


// compress images
// --------------------------------

gulp.task('compress-imgs', function() {
  return gulp.src(paths.img.dir + '/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.img.dest));
});


// watch for file changes
// --------------------------------

gulp.task('watch-files', function() {
  
  //watch css changes
  gulp.watch(paths.css.dir  + '/**', function() {
    gulp.start('build-css');
  });
  
  //watch js changes
  gulp.watch(paths.js.dir  + '/**', function() {
    gulp.start('build-js');
  });

});


// default task
// --------------------------------
    
gulp.task('default', ['clean-files'], function() {
  gulp.start('build-css');
  gulp.start('build-js');
  gulp.start('build-js-libs');
  gulp.start('compress-imgs');
  gulp.start('watch-files');
});