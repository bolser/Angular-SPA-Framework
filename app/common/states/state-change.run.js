'use strict';

angular
  .module('app')
  .run(stateChange);

function stateChange($rootScope, $stateParams, $window) {
  
  // State change success
  $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
  
  function stateChangeSuccess(event, toState) {
    
    // Scroll to top of viewport
    $window.scrollTo(0, 0);
    
  }
    
}