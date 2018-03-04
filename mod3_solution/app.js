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
            Ctrl.foundList = MenuSearchService.getMatchedMenuItems(name);

        }

        Ctrl.removeItem = function (index) {
            MenuSearchService.removeMenuItem(index);
        }

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        var found = [];
        var items = [];
        service.getMatchedMenuItems = function (name) {
            var menuItems = service.getMenuItems();
            for (var i = 0; i < menuItems.length; i++) {
                if (menuItems[i].description.contains(name)) {
                    found.push({
                        name: menuItems[i].name,
                        short_name: menuItems[i].short_name,
                        description: menuItems[i].description
                    });

                    return found;
                }
            }
        }

        service.getMenuItems = function () {
            var promise = $http({
                method: "GET",
                url: ApiBasePath
            });

            promise.then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    items.push({
                        name: data[i].name,
                        short_name: data[i].short_name,
                        description: data[i].description
                    });
                }
            })
            .catch(function (error) {
                console.log("Something went wrong");
            });
            return items;
        }

        service.removeMenuItem = function (index) {
            found.splice(itemIndex, 1);
        }
    }
})();