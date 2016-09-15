'use strict';

angular
  .module('app.services', [])
  .config(config);

// Push interceptor onto the stack
function config($httpProvider) {
  $httpProvider.interceptors.push('HttpInterceptorService');
}