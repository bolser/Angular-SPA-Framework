'use strict';


// init
// --------------------------------

angular
  .module('app')
  .directive('placeholder', placeholder);

placeholder.$inject = ['$timeout'];


// determine placeholder support
// --------------------------------

var testInput = document.createElement('input'),
    placeholderSupport = (testInput.placeholder !== undefined) ? true : false;


// functionality
// --------------------------------

function placeholder($timeout) {


  //define directive
  var directive = {
    restrict: 'A',
    link: link
  };

  return directive;


  //link
  function link(scope, elem, attrs) {

    //placeholder already supported or input is password
    if (placeholderSupport || attrs.type === 'password') return;

    //apply placeholder as value
    $timeout(replaceVal, 0);

    //remove value (placeholder) on focus
    elem.bind('focus', function() {
      if (elem.val() === attrs.placeholder) $timeout(emptyVal, 0);
    });

    //replace value (with placeholder) if empty on blur
    elem.bind('blur', function() {
      if (elem.val() === '') $timeout(replaceVal, 0);
    });

    //empty input value
    function emptyVal() {
      elem.val('');
    };

    //replace input value
    function replaceVal() {
       elem.val(attrs.placeholder);
    };

  };


};