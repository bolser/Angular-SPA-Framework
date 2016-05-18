'use strict';


// init
// --------------------------------

angular
  .module('app')
  .run(stateChange);


// functionality
// --------------------------------

function stateChange($rootScope, $stateParams, $window) {
  
  // state change success
  $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
  
  function stateChangeSuccess(event, toState) {
    
    // scroll to top
    $window.scrollTo(0, 0);
    
  }
    
}