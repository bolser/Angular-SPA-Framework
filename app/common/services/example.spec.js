describe('ExampleService', function() {

  // Bindable members
  var ExampleService;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind injected references to local variable
  beforeEach(inject(function(_ExampleService_) {
    ExampleService = _ExampleService_;
  }));

  // Verify service returns
  it('Should exist', function() {
    expect(ExampleService).toBeDefined();
  });

  // Verify example method exists
  it('Should have method example()', function() {
    expect(ExampleService.example).toBeDefined();
  });

});