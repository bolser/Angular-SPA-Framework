'use strict';


// init
// --------------------------------

angular
  .module('app')
  .run(analytics);

analytics.$inject = ['$rootScope', '$window', '$location'];


// functionality
// --------------------------------

function analytics($rootScope, $window, $location) {


  //view content loaded
  $rootScope.$on('$viewContentLoaded', viewContentLoaded);


  //send pageview to google analytics
  function viewContentLoaded(event){
    $window.ga('send', 'pageview', { page: $location.url() });
  };


};