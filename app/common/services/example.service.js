'use strict';


// init
// --------------------------------

angular
  .module('app')
  .factory('ExampleService', ExampleService);


// functionality
// --------------------------------

function ExampleService() {

  // callable functions
  var service = {
    example: example
  };

  return service;

  // example
  function example() {
    return;
  }

}