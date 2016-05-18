'use strict';


// init
// --------------------------------

angular
  .module('app')
  .factory('windowResizeService', windowResizeService);


// functionality
// --------------------------------

function windowResizeService($timeout) {

  
  // persistent data
  var afterResizeTimers = {};
  
  
  // callable members
  var service = {
    afterResize: afterResize
  };

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