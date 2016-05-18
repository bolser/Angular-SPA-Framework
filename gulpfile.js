'use strict';


// config
// --------------------------------

var paths = {
  css: {
    dest: './dist/css',
    dir: './src/scss',
    src: './src/scss/all.scss'
  },
  img: {
    dest: './dist/img',
    dir: './src/img'
  },
  js: {
    dest: './dist/js',
    dir: './app',
    src: './app/all.js'
  },
  jsLibs: {
    dest: './dist/js',
    src: [
      './node_modules/angular/angular.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js'
    ]
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
    ngAnnotate = require('gulp-ng-annotate'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    webpack = require('gulp-webpack');


// build tasks
// --------------------------------

gulp.task('default', function() {
  runSequence(
    'clean',
    ['build-css', 'build-js', 'build-js-libs', 'compress-imgs'],
    'watch'
  );
});

gulp.task('production', function() {
  runSequence(
    'clean',
    ['build-css', 'build-js', 'build-js-libs', 'compress-imgs']
  );
});


// watch for file changes
// --------------------------------

gulp.task('watch', function() {

  //watch css changes
  gulp.watch(paths.css.dir  + '/**/*.scss', function() {
    gulp.start('build-css');
  });

  //watch js changes
  gulp.watch(paths.js.dir  + '/**/*.js', function() {
    gulp.start('build-js');
  });

});


// clean
// --------------------------------

gulp.task('clean', function() {
  return del('./dist');
});


// build css
// --------------------------------

gulp.task('build-css', function() {
  return gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 0.5%']
    }))
    .pipe(cleanCSS())
    .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css.dest));
});


// build js
// --------------------------------

gulp.task('build-js', function() {
  return gulp.src(paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(webpack({
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.js.dest));
});


// build js libs
// --------------------------------

gulp.task('build-js-libs', function() {
  return gulp.src(paths.jsLibs.src)
    .pipe(sourcemaps.init())
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.jsLibs.dest));
});


// compress images
// --------------------------------

gulp.task('compress-imgs', function() {
  return gulp.src(paths.img.dir + '/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [
        pngquant()
      ]
    }))
    .pipe(gulp.dest(paths.img.dest));
});