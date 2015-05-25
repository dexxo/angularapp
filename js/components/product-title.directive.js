(function(angular){
  'use strict';
  angular
    .module('store-products')
    .directive('productTitle', productTitle);

  function productTitle () {

    var productTitle = {
      restrict: 'EA',
      templateUrl: 'templates/product-title.html'
    };

    return productTitle;
  }

}(window.angular));