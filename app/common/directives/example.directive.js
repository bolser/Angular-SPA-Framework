'use strict';

angular
  .module('app')
  .directive('ngExample', ngExample);

function ngExample() {

  // Define directive
  var directive = {
    replace: true,
    restrict: 'EA',
    scope: {
      oneWay: '@', // attr="hi" || attr="{{vm.message}}"
      twoWay: '=', // attr="vm.message"
      expr: '&' // attr="vm.hello()"
    },
    link: link,
    template: '<div></div>'
  };

  return directive;

  // Link function
  function link(scope, element, attrs) {
    return;
  }
}