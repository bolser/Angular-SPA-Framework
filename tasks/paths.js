'use strict';

// Paths
module.exports = {
  css: {
    dest: 'dist/css',
    dir: 'src/scss',
    src: 'src/scss/all.scss'
  },
  cssLibs: {
    dest: 'dist/css',
    src: [
      'bower_components/normalize.css/normalize.css'
    ]
  },
  fonts: {
    dest: 'dist/fonts',
    src: 'src/fonts/**/*.*'
  },
  html: {
    dest: 'dist/js',
    dir: 'app/',
    src: 'app/**/*.html'
  },
  img: {
    dest: 'dist/img',
    dir: 'src/img',
    src: 'src/img/**/*.*'
  },
  js: {
    dest: 'dist/js',
    dir: 'app',
    src: 'app/all.js'
  },
  jsLibs: {
    dest: 'dist/js',
    src: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-update-meta/dist/update-meta.js'
    ]
  }
};