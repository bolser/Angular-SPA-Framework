'use strict';

describe('ExampleService', function() {

  // Bindable members
  var ExampleService;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind references to global variables
  beforeEach(inject(function(_ExampleService_) {
    ExampleService = _ExampleService_;
  }));

  // Check service exists with methods
  it('Exists with required methods', function() {
    expect(ExampleService).toBeDefined();
    expect(angular.isFunction(ExampleService.example)).toBe(true);
  });
});