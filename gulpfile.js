'use strict';


// config
// --------------------------------

var paths = {
  css: {
    dest: './dist/css',
    dir: './src/scss',
    src: './src/scss/all.scss'
  },
  fonts: {
    dest: './dist/fonts',
    dir: './src/fonts'
  },
  html: {
    dest: './dist/html',
    dir: './app'
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
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-update-meta/dist/update-meta.js'
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
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    webpack = require('webpack-stream');


// build tasks
// --------------------------------

gulp.task('default', function() {
  return runSequence(
    'clean',
    ['build-css', 'build-js', 'build-js-libs', 'compress-imgs', 'copy-fonts'],
    'watch'
  );
});

gulp.task('production', function() {
  return runSequence(
    'clean',
    ['build-css', 'build-js', 'build-js-libs', 'compress-imgs', 'copy-fonts']
  );
});


// watch files
// --------------------------------

gulp.task('watch', function() {

  // css changes
  watch(paths.css.dir + '/**/*.scss', function() {
    return gulp.start('build-css');
  });

  // js changes
  watch(paths.js.dir + '/**/*.js', function() {
    return gulp.start('build-js');
  });

  // img changes
  watch(paths.img.dir + '/**/*.*', function() {
    return gulp.start('compress-imgs');
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
  return gulp.src(paths.img.dir + '/**/*.*')
    .pipe(imagemin().on('error', gutil.log))
    .pipe(gulp.dest(paths.img.dest));
});


// copy fonts
// --------------------------------

gulp.task('copy-fonts', function() {
  return gulp.src(paths.fonts.dir + '/**/*.*')
    .pipe(gulp.dest(paths.fonts.dest));
});