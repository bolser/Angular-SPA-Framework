'user strict';

describe('ngExample directive', function() {

  // Bindable members
  var element;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind references to global variables
  beforeEach(inject(function($compile, $rootScope) {
    element = $compile('<ng-example></ng-example>')($rootScope);
    $rootScope.$digest();
  }));

  // Check correct HTML is rendered
  it('Renders the correct HTML', function() {
    expect(element[0].nodeName).toBe('DIV');
  });
});