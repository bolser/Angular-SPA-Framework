describe('placeholder directive', function() {

  // Bindable members
  var element;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Mock service response
  beforeEach(module(function($provide) {
    $provide.value('PlaceholderSupportService', function() {
      return false;
    });
  }));

  // Bind references to global variables
  beforeEach(inject(function($compile, $rootScope) {
    element = $compile('<input name="test" placeholder="Test" />')($rootScope);
    $rootScope.$digest();
  }));

  // Check the correct HTML is rendered
  it('Renders placeholder as input value when placeholder is not supported', inject(function($timeout) {
    $timeout.flush();
    expect(element[0].value).toBe('Test');
  }));

});