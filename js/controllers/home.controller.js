(function(angular) {
  'use strict';
  angular
      .module('app')
      .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController ($scope) {
    $scope.message = 'Hola Mundo';
  }

}(window.angular));