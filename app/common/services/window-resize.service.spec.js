describe('WindowResizeService', function() {

  // Bindable members
  var WindowResizeService;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind references to global variables
  beforeEach(inject(function(_WindowResizeService_) {
    WindowResizeService = _WindowResizeService_;
  }));

  // Check service exists with methods
  it('Exists with required methods', function() {
    expect(WindowResizeService).toBeDefined();
  });

});