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
  function afterResize(callback, id) {
        
    // Cancel timer to reset it 
    if (afterResizeTimers[id]) {
      $timeout.cancel(afterResizeTimers[id]);
    }
    
    // Reset timer
    afterResizeTimers[id] = $timeout(callback, 200);
    
  }

}