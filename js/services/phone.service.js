(function (angular) {
  'use strict';

  angular
      .module('phones-cat')
      .factory('phoneService', phoneService);

  phoneService.$inject = ['$http', '$log'];

  function phoneService ($http, $log) {
    return {
      getPhones:getPhones,
      getPhone:getPhone
    };

    function getPhones () {
      return $http.get('/js/models/phones.json')
        .then(success)
        .catch(fail);

      function fail (error) {
        $log.log('XHR Failed for getPhones.' + error.data);
      }

      function success (response) {
        return response.data;
      }

    }

    function getPhone (phoneId) {
      return $http.get('/js/models/phones/'+ phoneId +'.json')
        .then(success)
        .catch(fail);

      function fail (error) {
        $log.log('XHR Failed for getPhone.' + error.data);
      }

      function success (response) {
        return response.data;
      }
    }

  }

}(window.angular));