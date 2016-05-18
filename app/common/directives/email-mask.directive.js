'use strict';


// init
// --------------------------------

angular
  .module('app')
  .directive('ngEmailMask', ngEmailMask);


// functionality
// --------------------------------

function ngEmailMask() {


  // define directive
  var directive = {
    replace: true,
    restrict: 'EA',
    scope: {
      user: '=',
      host: '='
    },
    template: '<a href="mailto:{{user}}@{{host}}">{{user}}@{{host}}</a>'
  };

  return directive;


}