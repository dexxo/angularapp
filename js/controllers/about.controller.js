(function(angular){
  'use strict';
  angular
      .module('app')
      .controller('AboutController', AboutController);

  function AboutController () {
    var vm = this;
    vm.message = 'This is About Page!!!';
  }

}(window.angular));