'use strict';

module.exports = {
  compile: {
    dest: 'dist',
    temp: '.tmp'
  },
  css: {
    dest: 'dist/css',
    filename: 'app.min.css',
    src: 'src/scss/all.scss',
    watch: 'src/scss/**/*.scss',
  },
  fonts: {
    dest: 'dist/fonts',
    src: 'src/fonts/**'
  },
  html: {
    filename: 'templates.js',
    module: 'app.templates',
    root: '/app',
    src: 'app/**/*.html',
    watch: 'app/**/*.html'
  },
  img: {
    dest: 'dist/img',
    src: 'src/img/**',
    watch: 'src/img/**'
  },
  index: {
    src: 'index.html',
    watch: 'index.html'
  },
  js: {
    dest: 'dist/js',
    filename: 'app.min.js',
    src: [
      'app/all.js',
      '.tmp/templates.js'
    ],
    watch: 'app/**/*.js'
  },
  jsLibs: {
    dest: 'dist/js',
    filename: 'libs.min.js',
    src: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-update-meta/dist/update-meta.js'
    ]
  },
  rev: {
    dontGlobal: [
      'favicon.ico',
    ],
    dontRenameFile: [
      '.html'
    ]
  },
  server: {
    files: ['./**/*.{html,css,js,png,jpg,svg,gif,json}']
  }
};