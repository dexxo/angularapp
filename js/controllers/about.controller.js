(function(angular){
  'use strict';
  angular
      .module('app')
      .controller('AboutController', AboutController);

  AboutController.$inject = ['$scope'];

  function AboutController ($scope) {
    $scope.message = 'This is About Page!!!';
  }

}(window.angular));