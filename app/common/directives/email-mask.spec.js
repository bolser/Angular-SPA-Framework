describe('ngEmailMask directive', function() {

  // Bindable members
  var $compile,
      $rootScope;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Run before each test
  beforeEach(inject(function(_$compile_, _$rootScope_, $httpBackend) {

    // Bind injected references to local variables
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    // Resolve get requests
    $httpBackend
      .when('GET', '/app/home/home.html').respond(200);
  }));

  // Check the correct HTML is rendered
  it('Renders the correct HTML', function() {
    var element = $compile('<ng-email-mask data-user="test" data-host="gmail.com"></ng-email-mask>')($rootScope);
    $rootScope.$digest();

    expect(element[0].nodeName).toBe('A');
    expect(element.html()).toBe('test@gmail.com');
    expect(element[0].href).toBe('mailto:test@gmail.com');
  });

});