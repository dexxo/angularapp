(function(angular) {
  'use strict';
  angular
      .module('app')
      .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController () {
    var vm = this;
    vm.message = home.message;
  }

}(window.angular));