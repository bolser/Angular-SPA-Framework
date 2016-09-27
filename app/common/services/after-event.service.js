'use strict';

angular
  .module('app.services')
  .factory('AfterEventService', AfterEventService);

function AfterEventService($timeout) {

  // Persistent data
  var timers = {};

  // After event
  return function(id, callback) {

    // Cancel existing timeout with id
    if (timers[id]) {
      $timeout.cancel(timers[id]);
    }

    // Create new timeout
    timers[id] = $timeout(callback, 200);
  }
}