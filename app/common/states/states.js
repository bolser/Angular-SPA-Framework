'use strict';

angular
  .module('app.states')
  .config(config);

function config($locationProvider, $stateProvider, $urlRouterProvider) {

  // Enable html5 mode & hash prefix
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    })
    .hashPrefix('!');

  // Catch all redirect
  $urlRouterProvider.otherwise(function($injector){
    $injector.invoke(function($state) {
      $state.go('404', {}, {location: false});
    });
  });

  // Define states
  $stateProvider
    .state('app', {
      url: '/',
      views: {
        '@': {
          templateUrl: '/app/home/home.html',
          controller: 'HomeController as home'
        }
      }
    })

    .state('404', {
      url: '/404',
      views: {
        '@': {
          templateUrl: '/app/error/404.html'
        }
      }
    })

    .state('error', {
      url: '/error',
      views: {
        '@': {
          templateUrl: '/app/error/error.html'
        }
      }
    });
}