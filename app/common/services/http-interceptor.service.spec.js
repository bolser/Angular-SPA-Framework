describe('HttpInterceptorService', function() {

  // Bindable members
  var $window,
      HttpInterceptorService;

  // Load module
  beforeEach(angular.mock.module('app.services'));

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

});