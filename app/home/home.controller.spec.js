'use strict';

describe('HomeController', function() {

  // Bindable members
  var HomeController;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Bind references to global variables
  beforeEach(inject(function($controller) {
    HomeController = $controller('HomeController', {});
  }));

  // Check controller loads correctly
  it('Should define vm', function() {
    expect(HomeController).toBeDefined();
  });
});