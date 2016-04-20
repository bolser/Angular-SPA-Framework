'use strict';


// init
// --------------------------------

angular
  .module('app')
  .directive('exampleDirective', exampleDirective);

exampleDirective.$inject = [];


// functionality
// --------------------------------

function exampleDirective() {


  //define directive
  var directive = {
    replace: true,
    restrict: 'EA',
    scope: {
      example: '=example'
    },
    link: link,
    templateUrl: '/directives/example.html?version=' + conf.version,
  };

  return directive;


  //link
  function link(scope, elem, attrs) {

  };


};