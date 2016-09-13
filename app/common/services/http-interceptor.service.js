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

    // Get $state via $injector to avoid a circular dependency
    var stateService = $injector.get('$state');

    switch (response.status) {
      case 404:
        return stateService.go('404');
        break;
      default:
        return stateService.go('error');
    }
  }

}

// Push interceptor onto the stack
function config($httpProvider) {
  $httpProvider.interceptors.push('HttpInterceptor');
}