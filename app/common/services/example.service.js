'use strict';


// init
// --------------------------------

angular
  .module('app')
  .factory('exampleService', exampleService);


// functionality
// --------------------------------

function exampleService() {

  // callable functions
  var service = {
    example: example
  };

  return service;

  // example function
  function example() {
    return;
  }

}