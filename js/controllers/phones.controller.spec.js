describe('Unit: PhonesController', function() {
  var ctrl, scope, pService;

  beforeEach(module('phones-cat'));

  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope, phoneService) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    // Create the controller
    ctrl = $controller('PhonesController', {
      $scope: scope,
      $rootScope: rootScope
    });
  }));


  it('$scope.phones shoud have a json object', function() {

  });


});