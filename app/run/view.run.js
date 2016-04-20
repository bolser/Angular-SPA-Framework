'use strict';


// init
// --------------------------------

angular
  .module('app')
  .run(view);

view.$inject = ['$rootScope', '$window', '$location'];


// functionality
// --------------------------------

function view($rootScope, $window, $location) {


  //route change success
  $rootScope.$on('$routeChangeSuccess', routeChangeSuccess);


  //update global view object
  function routeChangeSuccess(event, current) {

    //route doesn't exists
    if (!current.$$route) return;

    //route vars
    var route = current.$$route,
        baseUrl = conf.url.replace(/\/$/, '');

    //reposition view to top
    $window.scrollTo(0, 0);

    //add to view object
    $rootScope.view = {
      name: conf.name,
      url: baseUrl + $location.path(),
      robots: (route.robots ? route.robots : 'index, follow'),
      description: (route.description ? route.description : ''),
      title: (route.title ? route.title + ' // ' + conf.name : conf.name),
      social: {
        type: 'website',
        image: baseUrl + '/framework/img/brand/social.jpg'
      }
    };

  };


};