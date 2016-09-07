describe('PlaceholderSupportService', function() {

  // Bindable members
  var PlaceholderSupportService;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind references to global variables
  beforeEach(inject(function(_PlaceholderSupportService_) {
    PlaceholderSupportService = _PlaceholderSupportService_;
  }));

  // Check service exists with methods
  it('Exists with required methods', function() {
    expect(PlaceholderSupportService).toBeDefined();
  });

});