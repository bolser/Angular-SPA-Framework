describe('AfterEventService', function() {

  // Bindable members
  var AfterEventService;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind references to global variables
  beforeEach(inject(function(_AfterEventService_) {
    AfterEventService = _AfterEventService_;
  }));

  // Check service exists with methods
  it('Exists with required methods', function() {
    expect(angular.isFunction(AfterEventService)).toBe(true);
  });

});