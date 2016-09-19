'use strict';

angular
  .module('app.services')
  .factory('HttpInterceptorService', HttpInterceptorService);

function HttpInterceptorService($injector) {

  // Callable functions
  var service = {
    response: response,
    responseError: responseError
  };

  return service;

  // Pass through clean response
  function response(data) {
    return data;
  }

  // Handle error response
  function responseError(rejection) {

    // Handle bypass requests
    if (angular.isDefined(rejection.config) && rejection.config.bypassInterceptor) {
      return rejection;
    }

    // Get $state via $injector to avoid a circular dependency
    var state = $injector.get('$state');

    switch (rejection.status) {
      case 404:
        return state.go('404');
        break;
      default:
        return state.go('error');
    }
  }
}