(function (angular) {
  'use strict';

  angular
      .module('app')
      .controller('StoreController', StoreController);

  StoreController.$inject = ['productService', '$log'];

  function StoreController (productService, $log) {
    var vm = this;
    vm.products = [];

    setProducts();

    function setProducts () {
      return requestProducts().then(function(data){
        $log.info('setting products... '+ JSON.stringify(data));
      });
    }

    function requestProducts () {
      return productService.getProducts()
        .then(function (data) {
            vm.products = data;
            return vm.products;
        });
    }
  }

}(window.angular));