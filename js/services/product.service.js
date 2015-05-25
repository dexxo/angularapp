(function (angular) {
  'use strict';

  angular
      .module('app')
      .factory('productService', productService);

  productService.$inject = ['$http', '$log'];

  function productService ($http, $log) {
    return {
      getProducts:getProducts
    };

    function getProducts () {
      return $http.get('/js/models/products.json')
        .then(success)
        .catch(fail);

      function fail (error) {
        $log.log('XHR Failed for getProducts.' + error.data);
      }

      function success (response) {
        return response.data;
      }

    }
  }

}(window.angular));