'use strict';


// initialise
// --------------------------------

angular
  .module('app')
  .factory('WindowResizeService', WindowResizeService);


// functionality
// --------------------------------

function WindowResizeService($timeout) {
  
  // callable functions
  var service = {
    afterResize: afterResize
  };
  
  // persistent data
  var afterResizeTimers = {};
  
  // return service
  return service;

  // after window resize    
  function afterResize(callback, uniqueId) {
        
    // cancel timer to reset it 
    if (afterResizeTimers[uniqueId]) {
      $timeout.cancel(afterResizeTimers[uniqueId]);
    }
    
    // reset timer
    afterResizeTimers[uniqueId] = $timeout(callback, 200);
    
  }

}