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
    .otherwise('/404');

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