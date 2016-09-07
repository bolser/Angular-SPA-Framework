describe('placeholder directive', function() {

  // Bindable members
  var $compile,
      $rootScope;

  // Load module
  beforeEach(angular.mock.module('app'));

  // Run before each test
  beforeEach(inject(function(_$compile_, _$rootScope_) {

    // Bind injected references to local variables
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  // Check the correct HTML is rendered
  it('Renders the correct HTML', function() {
    var element = $compile('<input name="test" placeholder="Test" />')($rootScope);
    $rootScope.$digest();

    expect(element[0].value).toBe('');
  });

});