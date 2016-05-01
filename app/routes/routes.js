'use strict';


// init
// --------------------------------

angular
  .module('app')
  .config(routes);


// functionality
// --------------------------------

function routes($routeProvider, $locationProvider) {


  // html5 mode & hash prefix
  $locationProvider.html5Mode(true).hashPrefix('!');


  // routes
  $routeProvider

    // home
    .when('/', {
      templateUrl: '/views/home.html',
      controller: 'ExampleController',
      controllerAs: 'home',
      title: 'Home'
    })

    // 404
    .when('/404', {
      templateUrl: '/views/404.html',
      title: 'Page Not Found'
    })

    // catch all
    .otherwise({ redirectTo: '/404' });


};