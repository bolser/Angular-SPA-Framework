'use strict';

angular
  .module('app')
  .factory('WindowResizeService', WindowResizeService);

function WindowResizeService($timeout) {

  // Persistent data
  var afterResizeTimers = {};

  return service;

  // After window resize
  function service(callback, id) {

    // Cancel existing timeout with id
    if (afterResizeTimers[id]) {
      $timeout.cancel(afterResizeTimers[id]);
    }

    // Create new timeout
    afterResizeTimers[id] = $timeout(callback, 200);
  }

}