(function(angular) {
  'use strict';

  /**
   * @description directive for printing a proguct gallery
   * @example
   * <product-gallery></product-gallery>
   */
  angular
      .module('store-products')
      .directive('productGallery', productGallery);

  function productGallery() {
    var productGalleryObj = {
      restrict: 'E',
      templateUrl: 'templates/product-gallery.html',
      controller: ProductGallery,
      controllerAs: 'gallery',
      bindToController: true
    };
    return productGalleryObj;
  }

  function ProductGallery() {
    var vm = this;
    vm.current = 0;

    vm.setCurrent = function(current){
      vm.current = current;
    };
  }

}(window.angular));