///<reference path="angular.min.js" />
(function () {
    'use strict;'
    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    .factory('ShoppingListFactory', ShoppingListFactory);


    ShoppingListController1.$inject = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;
        var shoopingList = ShoppingListFactory();

        list1.itemName = "";
        list1.itemQuantity = "";
     
        list1.addItems = function () {
            try {
                shoopingList.addItem(list2.itemName, list2.itemQuantity);
            } catch (error) {
                list1.errorMessage = error.message;
            }
        }
        list1.items = shoopingList.getItems();
        list1.removeItem = function (itemIndex) {
            shoopingList.removeItem(itemIndex);
        };
            
    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function ShoppingListController2(ShoppingListFactory) {
        var list2 = this;
        var shoopingList = ShoppingListFactory(3);
        list2.itemName = "";
        list2.itemQuantity = "";

        list2.addItems = function () {
            try{
                shoopingList.addItem(list2.itemName, list2.itemQuantity);
            } catch (error) {
                list2.errorMessage = error.message;
            }
          
        }
        list2.items = shoopingList.getItems();
        list2.removeItem = function (itemIndex) {
            shoopingList.removeItem(itemIndex);
        };
       
    }


   
    function ShoppingListService(maxItem) {
        var service = this;
        
        var items = [];

        service.addItem = function (itemName, quantity) {
            if (maxItem === undefined || (maxItem !== undefined && items.length < maxItem)) {
                var item = {
                    name: itemName,
                    quantity: quantity
                }
                items.push(item);
            }
            else {
                throw new Error("Max item ("+maxItem+") reached.");
            }
           
        }

        service.getItems = function () {
            return items;
        }

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex,1);
        }
    }

    function ShoppingListFactory() {
        var factory = function (maxItems) {
            return new ShoppingListService(maxItems);
        }
        return factory;
    }

})();