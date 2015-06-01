(function(angular){
  'use strict';
  angular
      .module('phones-cat')
      .controller('PhonesController', PhonesController);

  PhonesController.$inject = ['$scope', 'phoneService', '$log'];

  function PhonesController ($scope, phoneService, $log) {
    $scope.phones = [];
    $scope.query = '';
    $scope.orderProp = 'age';

    $scope.requestPhones = function () {
      return phoneService.getPhones().then(function (data) {
        $scope.phones = data;
        return $scope.phones;
      });
    };

    $scope.setPhones = function () {
      return $scope.requestPhones().then(function (data) {
        $log.info('setting phones... ' + JSON.stringify(data));
      });
    };

    $scope.setPhones();

  }

}(window.angular));