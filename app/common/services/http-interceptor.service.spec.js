describe('HttpInterceptorService', function() {

  // Bindable members
  var HttpInterceptorService;

  // Mock state
  var statePromiseMock = {};
  beforeEach(module('app.services', {
    $state: {
      go: jasmine.createSpy().and.returnValue(statePromiseMock)
    }
  }));

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

  // Check interceptor redirects to correct state
  it('Redirects on error status', inject(function($state) {

    // 404 status
    var state404Promise = HttpInterceptorService.responseError({status: 404});
    expect($state.go).toHaveBeenCalledWith('404');
    expect(state404Promise).toBe(statePromiseMock);

    // Error status
    var state500Promise = HttpInterceptorService.responseError({status: 500});
    expect($state.go).toHaveBeenCalledWith('error');
    expect(state500Promise).toBe(statePromiseMock);
  }));

});