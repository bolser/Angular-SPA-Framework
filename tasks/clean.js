'use strict';

// Modules
var del = require('del'),
    gulp = require('gulp');

// Empty distribution directory
module.exports = function() {
  return del('dist');
}