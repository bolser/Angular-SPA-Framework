'use strict';
  
  
// init 
// --------------------------------

angular.module('app').directive('emailMask', emailMask);

emailMask.$inject = [];


// functionality
// --------------------------------

function emailMask() {
  
  //define directive
  var directive = {
    replace: true,
    restrict: 'EA',
    scope: {
      user: '=user',
      host: '=host'
    },
    template: '<a href="mailto:{{user}}@{{host}}">{{user}}@{{host}}</a>'
  };
  
  return directive;

};