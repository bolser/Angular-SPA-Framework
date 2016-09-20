'use strict';

angular
  .module('app.states', [
    'ui.router'
  ]).run(stateChange);

// Run on module load
function stateChange($rootScope, $stateParams, $window) {

  // On state change success
  $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);

  function stateChangeSuccess(event, toState) {

    // Scroll to top of viewport
    $window.scrollTo(0, 0);
  }
}