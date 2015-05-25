(function(angular){
  'use strict';

  angular
      .module('app')
      .factory('appService', appService);

  appService.$inject = ['$http', '$log'];

  function appService ($http, $log) {
    return {
      getHomeData:getHomeData
    };

    function getHomeData () {
      return $http.get('/js/models/home.json')
        .then(success)
        .catch(fail);

      function success (response) {
        return response.data;
      }

      function fail (error) {
        $log.log('XHR Failed for getPhones.' + error.data);
      }
    }
  }
}(window.angular));