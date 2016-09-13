'use strict';

angular
  .module('app.directives')
  .directive('placeholder', placeholder);

function placeholder(PlaceholderSupportService, $timeout) {

  // Define directive
  var directive = {
    restrict: 'A',
    link: link
  };

  return directive;

  // Link function
  function link(scope, element, attrs) {

    // Placeholder already supported or input is password
    if (PlaceholderSupportService() || attrs.type === 'password') {
      return;
    }

    // Apply placeholder as value asynchronously
    $timeout(replaceVal, 0);

    // Empty value if equal to placeholder on focus
    element.bind('focus', focus);

    function focus() {
      if (element.val() === attrs.placeholder) {
        $timeout(emptyVal, 0);
      }
    }

    // Add placeholder value if empty on blur
    element.bind('blur', blur);

    function blur() {
      if (element.val() === '') {
        $timeout(replaceVal, 0);
      }
    }

    // Empty input value
    function emptyVal() {
      element.val('');
    }

    // Replace input value
    function replaceVal() {
      element.val(attrs.placeholder);
    }
  }
}