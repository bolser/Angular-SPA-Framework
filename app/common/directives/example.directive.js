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
      oneWay: '@', // attr="hi" || attr="{{vm.hi}}"
      twoWay: '=', // attr="vm.hi"
      expr: '&' // attr="hi()"
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