describe('Unit: ReviewController', function() {
  var ctrl, scope, pService;

  beforeEach(module('app'));

  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('ReviewController', {
      $scope: scope
    });
  }));


  it('$scope.addReview shoud add new reviews to products', function() {
    expect(scope.review).not.toBeUndefined();
    var product = {
      reviews: []
    };

    scope.review = {
      author: "fernando",
      body: "un review",
      stars: 5
    };

    scope.addReview(product);
    expect(product.reviews).not.toEqual([]);
    expect(scope.review).toEqual({});
  });


});