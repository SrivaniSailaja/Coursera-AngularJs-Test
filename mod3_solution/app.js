///<reference path="angular.min.js"/>
(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json')
    .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            restrict: "E",
            templateUrl: 'menuList.html',
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService']
    function NarrowItDownController(MenuSearchService) {
        var Ctrl = this;
        Ctrl.name = "";

        Ctrl.narrowdown = function (name) {
            var promise = MenuSearchService.getMenuItems();
            Ctrl.foundList = MenuSearchService.getMatchedMenuItems(name);

        }

        Ctrl.removeItem = function (index) {
            MenuSearchService.removeMenuItem(index);
        }

    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        var found = [];
        var items = [];
        service.getMatchedMenuItems = function (name) {
            var promise = service.getMenuItems();
            promise.then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    items.push({
                        name: data[i].name,
                        short_name: data[i].short_name,
                        description: data[i].description
                    });
                }
            });
            for (var i = 0; i < items.length; i++) {
                if (items[i].description.contains(name)) {
                    found.push({
                        name: items[i].name,
                        short_name: items[i].short_name,
                        description: items[i].description
                    });

                    return found;
                }
            }
        };

        service.getMenuItems = function () {
            var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            });
            return response;

        };

        service.removeMenuItem = function (index) {
            found.splice(itemIndex, 1);
        };
    }
})();