describe('Unit: HomeController', function() {
  // Load the module with MainController
  beforeEach(module('app'));

  var ctrl, scope;

  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $scope) {
    scope = $scope;
    // Create the controller
    ctrl = $controller('HomeController', {
      $scope: scope
    });
  }));

  it('should $scope.message be iquals to Hola Mundo',
    function() {
      expect(scope.message).toEqual('Hola Mundo');
  });
});