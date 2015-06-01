(function(angular){
  'use strict';

  angular
      .module('app')
      .controller('ReviewController', ReviewController);

  ReviewController.$inject = ['$scope'];

  function ReviewController ($scope) {
    $scope.review = {};

    $scope.addReview = function (product) {
      product.reviews.push($scope.review);
      $scope.review = {};
    };
  }

}(window.angular));