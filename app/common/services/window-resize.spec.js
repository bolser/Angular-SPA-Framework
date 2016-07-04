describe('WindowResizeService', function() {

  // Bindable variables
  var WindowResizeService;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind injected service to local variable
  beforeEach(inject(function(_WindowResizeService_) {
    WindowResizeService = _WindowResizeService_; 
  }));

  // Verify service exists
  it('should exist', function() {
    expect(WindowResizeService).toBeDefined();
  });
  
});