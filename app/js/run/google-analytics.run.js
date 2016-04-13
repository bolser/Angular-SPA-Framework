'use strict';


// init
// --------------------------------

angular.module('app').run(googleAnalytics);

googleAnalytics.$inject = ['$rootScope', '$window', '$location'];


// functionality
// --------------------------------

function googleAnalytics($rootScope, $window, $location) {
      
  //view content loaded    
  $rootScope.$on('$viewContentLoaded', viewContentLoaded);
  
  //send pageview to google analytics
  function viewContentLoaded(event){
    $window.ga('send', 'pageview', { page: $location.url() });
  };
  
};