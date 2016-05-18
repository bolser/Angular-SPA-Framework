'use strict';


// init
// --------------------------------

angular
  .module('app')
  .directive('ngExample', ngExample);


// functionality
// --------------------------------

function ngExample() {


  // define directive
  var directive = {
    replace: true,
    restrict: 'EA',
    scope: {
      example: '='
    },
    link: link,
    templateUrl: '/app/directives/example.html',
  };

  return directive;


  // directive link
  function link(scope, elem, attrs) {

  }


}