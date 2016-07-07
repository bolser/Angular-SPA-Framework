/*
 * USAGE
 *
 * <ng-email-mask data-user="joe" data-host="bloggs.com"></ng-email-mask>
 */
 
 
'use strict';
 
angular
  .module('app')
  .directive('ngEmailMask', ngEmailMask);

function ngEmailMask() {

  // Define directive
  var directive = {
    replace: true,
    restrict: 'EA',
    scope: {
      user: '@',
      host: '@'
    },
    template: '<a href="mailto:{{user}}@{{host}}">{{user}}@{{host}}</a>'
  };

  return directive;

}