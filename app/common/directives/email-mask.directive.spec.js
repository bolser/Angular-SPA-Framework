describe('ngEmailMask directive', function() {

  // Bindable members
  var element;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind references to global variables
  beforeEach(inject(function($compile, $rootScope, $httpBackend) {
    element = $compile('<ng-email-mask data-user="test" data-host="gmail.com"></ng-email-mask>')($rootScope);
    $rootScope.$digest();
  }));

  // Check correct link is rendered
  it('Renders correct mailto link', function() {
    expect(element[0].nodeName).toBe('A');
    expect(element.html()).toBe('test@gmail.com');
    expect(element[0].href).toBe('mailto:test@gmail.com');
  });

});