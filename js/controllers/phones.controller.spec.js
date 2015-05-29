describe('Unit: PhonesController', function() {
  // Load the module with MainController
  beforeEach(module('phones-cat'));

  var ctrl, scope;

  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('PhonesController', {
      $scope: scope
    });
  }));

  /*
  it('$scope.phones shoud have a json object', function() {
    var phones = [];

    expect(scope.phones).toEqual(phones);
    scope.setPhones();

  });
   */


});