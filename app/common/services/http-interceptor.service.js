'use strict';

angular
  .module('app')
  .config(config)
  .factory('HttpInterceptor', HttpInterceptor);

function HttpInterceptor($injector) {

  // Callable functions
  var service = {
    response: response,
    responseError: error
  };

  return service;

  // Pass through clean response
  function response(data) {
    return data;
  }

  // Handle error response
  function error(rejection, $state) {

    // Handle bypass requests
    if (rejection.config.bypassInterceptor) {
      return rejection;
    }

    // Get $state via the injector or a circular dependency occurs
    var stateService = $injector.get('$state');

    switch (response.status) {
      case 404:
        return stateService.go('app.404');
        break;
      default:
        return stateService.go('app.error');
    }
  }

}

function config($httpProvider) {

  // Push interceptor onto the stack
  $httpProvider.interceptors.push('HttpInterceptor');
}