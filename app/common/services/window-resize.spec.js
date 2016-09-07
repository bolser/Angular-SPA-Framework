describe('WindowResizeService', function() {

  // Bindable members
  var WindowResizeService;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind injected references to local variables
  beforeEach(inject(function(_WindowResizeService_) {
    WindowResizeService = _WindowResizeService_;
  }));

  // Verify service returns
  it('Exists', function() {
    expect(WindowResizeService).toBeDefined();
  });

  // Verify afterResize method exists
  it('Has method afterResize()', function() {
    expect(WindowResizeService.afterResize).toBeDefined();
  });

});