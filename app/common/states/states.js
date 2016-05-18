'use strict';


// init
// --------------------------------

angular
  .module('app')
  .config(states);


// functionality
// --------------------------------

function states($locationProvider, $stateProvider, $urlRouterProvider) {


  // enable html5 mode & hash prefix
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    })
    .hashPrefix('!');
  
  
  // catch all redirect
  $urlRouterProvider
    .otherwise('/');


  // define states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/home/home.html',
      controller: 'HomeController as home'
    })
    
    .state('test', {
      url: '/test',
      templateUrl: '/app/test/test.html'
    });


}