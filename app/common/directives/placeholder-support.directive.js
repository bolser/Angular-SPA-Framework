'use strict';

angular
  .module('app')
  .directive('placeholder', placeholder);

function placeholder($timeout) {

  // Define directive
  var directive = {
    restrict: 'A',
    link: link
  };

  return directive;

  // Link function
  function link(scope, elem, attrs) {

    // Placeholder already supported or input is password
    if (placeholderSupport() || attrs.type === 'password') {
      return;
    }

    // Apply placeholder as value asynchronously
    $timeout(replaceVal, 0);

    // Empty value if equal to placeholder on focus
    elem.bind('focus', focus);
    
    function focus() {
      if (elem.val() === attrs.placeholder) {
        $timeout(emptyVal, 0);
      }
    }

    // Add placeholder value if empty on blur
    elem.bind('blur', blur);
    
    function blur() {
      if (elem.val() === '') {
        $timeout(replaceVal, 0);
      }
    }

    // Empty input value
    function emptyVal() {
      elem.val('');
    }

    // Replace input value
    function replaceVal() {
      elem.val(attrs.placeholder);
    }

  }

}


// Determine placeholder support
// --------------------------------

function placeholderSupport() {
  
  // Test browser support for placeholder
  var testInput = document.createElement('input');
  return (testInput.placeholder !== undefined) ? true : false;
    
}