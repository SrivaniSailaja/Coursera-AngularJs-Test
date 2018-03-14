(function(){
    'use strict';
    angular.module('MenuData')
    .service('MenuDataService',MenuDataService);

    MenuDataService.$inject=['$http'];
    function MenuDataService($http){
        var service = this;
        var categoies =[];
        var menu_items=[];

        service.getAllCategories= function(){
            //https://davids-restaurant.herokuapp.com/categories.json
            $http.get('https://davids-restaurant.herokuapp.com/categories.json')
            .then(function(response){
                categoies=response.data;
            })
            .catch(function (error) {
                console.log("Something went wrong  from getAllCategories");
            });
        }

        service.getItemsForCategory=function(shortname){
            //https://davids-restaurant.herokuapp.com/menu_items.json?category=
            var promise = $http({
                method: "GET",
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
                params: {
                    category: shortname
                }
            });
            promise.then(function (response) {
                var menu_items=response.data;
            })
            .catch(function (error) {
                console.log("Something went wrong from getItemsForCategory");
            });
        }
    }
})();