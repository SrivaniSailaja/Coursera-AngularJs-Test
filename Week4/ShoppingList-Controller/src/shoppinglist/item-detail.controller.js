(function () {
    'use strict';
    
    angular.module('ShoppingList')
    .controller('ItemDetailController', ItemDetailController);
    
    // 'item' is injected through state's resolve
    ItemDetailController.$inject = ['$sateParams','items']
    function ItemDetailController($sateParams,items) {
      var itemDetail = this;
      var item=items[$sateParams.itemId];
      itemDetail.name = item.name;
      itemDetail.quantity = item.quantity;
      itemDetail.description = item.description;
    }
    
    })();
    