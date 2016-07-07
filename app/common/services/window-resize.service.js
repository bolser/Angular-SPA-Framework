'use strict';

angular
  .module('app')
  .factory('WindowResizeService', WindowResizeService);

function WindowResizeService($timeout) {
  
  // Callable functions
  var service = {
    afterResize: afterResize
  };
  
  // Persistent data
  var afterResizeTimers = {};
  
  // Return service
  return service;

  // After window resize    
  function afterResize(callback, uniqueId) {
        
    // Cancel timer to reset it 
    if (afterResizeTimers[uniqueId]) {
      $timeout.cancel(afterResizeTimers[uniqueId]);
    }
    
    // Reset timer
    afterResizeTimers[uniqueId] = $timeout(callback, 200);
    
  }

}