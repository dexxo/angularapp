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

    setPhones();

    function setPhones () {
      return requestPhones().then(function () {
        $log.info('setting phones..');
      });
    }

    function requestPhones () {
      return phoneService.getPhones().then(function (data) {
        $scope.phones = data;
        return $scope.phones;
      });
    }
  }

}(window.angular));