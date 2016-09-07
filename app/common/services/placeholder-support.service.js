'use strict';

angular
  .module('app')
  .factory('PlaceholderSupportService', PlaceholderSupportService);

function PlaceholderSupportService() {

  // Persistent data
  var test = {
    run: false
  };

  // Return service
  return service;

  // Test placeholder support
  function service() {

    // Return existing test result
    if (test.run) {
      return test.support;
    }

    // Start new test
    var input = document.createElement('input'),
        textarea = document.createElement('textarea'),
        support = ('placeholder' in input && 'placeholder' in textarea);

    // Store & return results
    test.run = true;
    test.support = support;
    return test.support;
  }
}