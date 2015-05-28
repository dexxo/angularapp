(function(angular) {
  'use strict';

  angular
      .module('app')
      .controller('NavBarController', NavBarController);

  NavBarController.$inject = ['$scope', '$location', '$log'];

  function NavBarController ($scope, $location, $log) {
    $scope.curTab = $location.path();

    $scope.isActive = function (index) {
      return $scope.curTab === index;
    };

    $scope.setTab = function (index) {
      $scope.curTab = index;
    };

  }

}(window.angular));