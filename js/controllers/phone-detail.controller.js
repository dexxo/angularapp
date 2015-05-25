(function(angular){
  'use strict';
  angular
      .module('phones-cat')
      .controller('PhoneDetailController', PhoneDetailController);

  PhoneDetailController.$inject = ['$scope', 'phonePrepService'];

  function PhoneDetailController ($scope, phonePrepService) {
    $scope.phone = phonePrepService;
  }

}(window.angular));