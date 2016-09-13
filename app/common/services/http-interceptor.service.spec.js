describe('HttpInterceptorService', function() {

  // Bindable members
  var $window,
      HttpInterceptorService;

  // Load module
  beforeEach(module('app.services'));

  // Set window value
  beforeEach(function () {
    $window = { location: { href: null } };

    module(function($provide) {
      $provide.value('$window', $window);
    });
  });

  // Bind references to global variables
  beforeEach(inject(function(_HttpInterceptorService_) {
    HttpInterceptorService = _HttpInterceptorService_;
  }));

  // Check service exists with methods
  it('Exists with required methods', function() {
    expect(HttpInterceptorService).toBeDefined();
    expect(angular.isFunction(HttpInterceptorService.response)).toBe(true);
    expect(angular.isFunction(HttpInterceptorService.responseError)).toBe(true);
  });

  // Test 404 HTTP response
  describe('When HTTP response 404', function() {
    beforeEach(function() {
      HttpInterceptorService.responseError({ status: 404 });
    });

    it('Sets window location', function() {
      expect($window.location.href).toBe('/404');
    });
  });

});