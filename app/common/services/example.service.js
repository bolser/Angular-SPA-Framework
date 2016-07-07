'use strict';

angular
  .module('app')
  .factory('ExampleService', ExampleService);

function ExampleService() {

  // Callable functions
  var service = {
    example: example
  };

  return service;

  // Example
  function example() {
    return;
  }

}