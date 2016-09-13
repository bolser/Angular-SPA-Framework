'use strict';

// Modules
var config = require('./config'),
    del = require('del'),
    gulp = require('gulp');

// Empty distribution directory
module.exports = function() {
  return del(config.compileDirs);
}