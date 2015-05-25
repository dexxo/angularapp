(function(angular){
  'use strict';
  angular
      .module('app')
      .config(appRoute);

  appRoute.$inject = ['$routeProvider'];

  function appRoute ($routeProvider){
    $routeProvider
      // route for the home page
      .when('/', {
          templateUrl : 'templates/home.html',
          controller  : 'HomeController',
          controllerAs: 'vm'
      })

      // route for the store page
      .when('/store', {
          templateUrl : 'templates/store.html',
          controller  : 'StoreController',
          controllerAs: 'store'
      })

      // route for the phones page
      .when('/phones', {
          templateUrl : 'templates/phones.html',
          controller  : 'PhonesController'
      })

      //route for the phone detail
      .when('/phones/:phoneId', {
        templateUrl: 'templates/phone-detail.html',
        controller: 'PhoneDetailController',
        resolve: {
          phonePrepService: phonePrepService
        }
      })

      // route for the about page
      .when('/about', {
          templateUrl : 'templates/about.html',
          controller  : 'AboutController',
          controllerAs: 'vm'
      })

      // default route
      .otherwise({
        redirectTo : '/'
      });
  }

  phonePrepService.$inject = ['phoneService', '$route'];

  function phonePrepService (phoneService, $route) {
    return phoneService.getPhone($route.current.params.phoneId);
  }

}(window.angular));