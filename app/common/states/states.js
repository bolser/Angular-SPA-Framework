'use strict';

angular
  .module('app')
  .config(states);

function states($locationProvider, $stateProvider, $urlRouterProvider) {

  // Enable html5 mode & hash prefix
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    })
    .hashPrefix('!');
  
  // Catch all redirect
  $urlRouterProvider
    .otherwise('/');

  // Define states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/home/home.html',
      controller: 'HomeController as home'
    });

}