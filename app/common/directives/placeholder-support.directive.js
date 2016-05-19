'use strict';


// init
// --------------------------------

angular
  .module('app')
  .directive('placeholder', placeholder);


// functionality
// --------------------------------

function placeholder($timeout) {

  // define directive
  var directive = {
    restrict: 'A',
    link: link
  };

  return directive;

  // directive link
  function link(scope, elem, attrs) {

    // placeholder already supported or input is password
    if (placeholderSupport() || attrs.type === 'password') {
      return;
    }

    // apply placeholder as value asynchronously
    $timeout(replaceVal, 0);

    // empty value if equal to placeholder on focus
    elem.bind('focus', focus);
    
    function focus() {
      if (elem.val() === attrs.placeholder) {
        $timeout(emptyVal, 0);
      }
    }

    // add placeholder value if empty on blur
    elem.bind('blur', blur);
    
    function blur() {
      if (elem.val() === '') {
        $timeout(replaceVal, 0);
      }
    }

    // empty input value
    function emptyVal() {
      elem.val('');
    }

    // replace input value
    function replaceVal() {
      elem.val(attrs.placeholder);
    }

  }

}


// determine placeholder support
// --------------------------------

function placeholderSupport() {
  
  // test browser support for placeholder
  var testInput = document.createElement('input');
  return (testInput.placeholder !== undefined) ? true : false;
    
}