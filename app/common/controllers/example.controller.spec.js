'use strict';

describe('ExampleController', function() {

  // Bindable members
  var ExampleController;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind references to global variables
  beforeEach(inject(function($controller) {
    ExampleController = $controller('ExampleController', {});
  }));

  // Check controller function executes correctly
  it('Should define vm.result', function() {
    ExampleController.example();
    expect(ExampleController.result).toBe('answer');
  });
});