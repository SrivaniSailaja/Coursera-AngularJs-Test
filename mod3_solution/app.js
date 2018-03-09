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
            scope: {
                items: "<myList",
                numItems:"@numItems",
                onRemove:'='
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'list',
            bindToController:true
        };

        return ddo;
    }

    function NarrowItDownDirectiveController() {
        var list1 = this;
        list1.numberOfItems = function () {

            if (list1.items.length === 0){
                return true;
            }
        }

        list1.isDefined = function () {
            if (lis1 === undefined) {
                return true;
            }
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService']
    function NarrowItDownController(MenuSearchService) {
        var Ctrl = this;
        Ctrl.name = "";
        Ctrl.narrowdown = function (name) {
            Ctrl.foundList = [];
            Ctrl.foundList = MenuSearchService.getMatchedMenuItems(Ctrl.name);
            Ctrl.numItems = Ctrl.foundList.length;

        }

        Ctrl.removeItem = function (index) {
            MenuSearchService.removeMenuItem(index);
        }

    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        var items = [];
        service.getMatchedMenuItems = function (name) {
            service.found = [];

            //if (name != "") 
            {
                $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
          .then(function (response) {
              items = response.data.menu_items;
          });

                for (var i = 0; i < items.length; i++) {
                    if (items[i].description.includes(name)) {
                        service.found.push({
                            name: items[i].name,
                            short_name: items[i].short_name,
                            description: items[i].description
                        });
                    }
                }
          }
            return service.found;
           
        };



        service.removeMenuItem = function (index) {
            service.found.splice(index, 1);
        };
    }
})();