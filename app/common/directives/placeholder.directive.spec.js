describe('placeholder directive', function() {

  // Bindable members
  var placeholderSupportResponse;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Mock service response
  beforeEach(module(function($provide) {
    $provide.value('PlaceholderSupportService', function() {
      return placeholderSupportResponse;
    });
  }));

  // Check correct HTML is rendered
  it('Renders placeholders as values if placeholders are supported', inject(function($timeout, $compile, $rootScope) {

    // Mock placeholder support
    placeholderSupportResponse = false;

    // Compile directive element
    var element = $compile('<input name="test" placeholder="Test" />')($rootScope);
    $rootScope.$digest();
    $timeout.flush();

    // Test value equals placeholder
    expect(element[0].value).toBe('Test');
  }));

  // Check correct HTML is rendered
  it('Leaves inputs alone if placeholders are supported', inject(function($timeout, $compile, $rootScope) {

    // Mock placeholder support
    placeholderSupportResponse = true;

    // Compile directive element
    var element = $compile('<input name="test" placeholder="Test" />')($rootScope);
    $rootScope.$digest();

    // Test timeout doesn't run & value is empty
    expect(function() {
      $timeout.flush();
    }).toThrow();
    expect(element[0].value).toBe('');
  }));

});