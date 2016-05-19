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
    template: '<div></div>'
  };

  return directive;

  // directive link
  function link(scope, elem, attrs) {
    return;
  }

}