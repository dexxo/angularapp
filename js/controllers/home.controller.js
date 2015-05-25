(function(angular) {
  'use strict';
  angular
      .module('app')
      .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$log', 'appService'];

  function HomeController ($scope, $log, appService) {
    $scope.message = '';
    requestsData();

    function requestsData () {
      return getData().then(function () {
        $log.info('message set...');
      });
    }

    function getData() {
      return appService.getHomeData().then(function (data) {
        $scope.message = data.message;
        return $scope.message
      });
    }
  }

}(window.angular));