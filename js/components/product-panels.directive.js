(function(angular) {
  'use strict';

  angular
      .module('store-products')
      .directive('productPanels', productPanels);

  function productPanels (){
    var productPanelsObj = {
      restrict: 'E',
      templateUrl: 'templates/product-panels.html',
      controller: ProductPanelsController,
      controllerAs: 'panel',
      bindToController: true
    };
    return productPanelsObj;
  }

  function ProductPanelsController () {
    var vm = this;
    vm.tab = 1;

    vm.selectTab = function (setTab) {
      vm.tab = setTab;
    };

    vm.isSelected = function (checkTab) {
      return vm.tab === checkTab;
    };
  }

}(window.angular));