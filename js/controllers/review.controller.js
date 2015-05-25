(function(angular){
  'use strict';

  angular
      .module('app')
      .controller('ReviewController', ReviewController);

  function ReviewController () {
    var vm = this;
    vm.review = {};
    vm.addReview = function (product) {
      product.reviews.push(vm.review);
      vm.review = {};
    };
  }

}(window.angular));