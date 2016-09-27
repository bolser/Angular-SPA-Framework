'use strict';

// Modules
var config = require('./config'),
    del = require('del');

// Empty distribution directory
module.exports = function() {
  return del([
    config.compile.dest,
    config.compile.temp
  ]);
}