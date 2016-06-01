'use strict';


// config
// --------------------------------

var paths = {
  css: {
    dest: './dist/css',
    dir: './src/scss',
    src: './src/scss/all.scss'
  },
  cssLibs: {
    dest: './dist/css',
    src: [
      './bower_components/normalize.css/normalize.css'
    ]
  },
  fonts: {
    dest: './dist/fonts',
    dir: null,
    src: null
  },
  html: {
    dest: './app/common/templates',
    dir: './app',
    src: './app/**/*.html'
  },
  img: {
    dest: './dist/img',
    dir: './src/img',
    src: './src/img/**/*.*'
  },
  js: {
    dest: './dist/js',
    dir: './app',
    src: './app/all.js'
  },
  jsLibs: {
    dest: './dist/js',
    src: [
      './bower_components/angular/angular.js',
      './bower_components/angular-animate/angular-animate.js',
      './bower_components/angular-ui-router/release/angular-ui-router.js',
      './bower_components/angular-update-meta/dist/update-meta.js'
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
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    ngAnnotate = require('gulp-ng-annotate'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache'),
    through = require('through2'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    webpack = require('webpack-stream');


// build tasks
// --------------------------------

gulp.task('default', function() {
  return runSequence(
    'clean',
    ['build-css', 'build-css-libs', 'build-js', 'build-js-libs', 'build-html', 'compress-imgs', 'copy-fonts'],
    'watch'
  );
});

gulp.task('production', function() {
  return runSequence(
    'clean',
    ['build-css', 'build-css-libs', 'build-js', 'build-js-libs', 'build-html', 'compress-imgs', 'copy-fonts']
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
  
  // html changes
  watch(paths.html.dir + '/**/*.html', function() {
    return gulp.start('build-html');
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


// build css libs
// --------------------------------

gulp.task('build-css-libs', function() {
  return gulp.src(paths.cssLibs.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('libs.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css.dest));
});


// build js
// --------------------------------

gulp.task('build-js', function() {
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


// build html
// --------------------------------

gulp.task('build-html', function() {
  return gulp.src(paths.html.src)
    .pipe(templateCache({
      module: 'app'
    }))
    .pipe(gulp.dest(paths.html.dest));
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
  return gulp.src(paths.img.src)
    .pipe(imagemin().on('error', gutil.log))
    .pipe(gulp.dest(paths.img.dest));
});


// copy fonts
// --------------------------------

gulp.task('copy-fonts', function() {
  if (paths.fonts.src) {
    return gulp.src(paths.fonts.src)
      .pipe(gulp.dest(paths.fonts.dest));
  }
});