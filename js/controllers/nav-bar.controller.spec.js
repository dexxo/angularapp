describe('Unit: NavBarController', function() {
  // Load the module with MainController
  beforeEach(module('app'));

  var ctrl, scope, location;

  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    // Create the controller
    ctrl = $controller('NavBarController', {
      $scope: scope,
      $location: location
    });
  }));

  it('$scope.curTab value should be equalt ro $location.path value', function() {
    expect(scope.curTab).toEqual(location.path());
  });

  it('$scope.curTab should be equal to index', function() {
    var index = '/store';
    scope.setTab(index);
    expect(scope.curTab).toEqual(index);
  });

  it('$scope.isActive shoud return a true', function() {
    var index = '/store';
    scope.setTab(index);
    expect(scope.curTab).toEqual('/store');
    expect(scope.isActive(scope.curTab)).toBe(true);
  });

});