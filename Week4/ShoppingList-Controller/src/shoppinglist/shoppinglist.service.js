(function(){
    'use strict';

    angular.module('ShoppingList')
    .service('ShoppingListService',ShoppingListService);

    ShoppingListService.$inject=['$q','$timeout'];
    function ShoppingListService($q,$timeout){
      var service=this;

      //List of shopping items
      var items =[];

      items.push({
          name:"sugar",
          quantity:"2 bags",
          description:"Sugar is used for baking"
      });
      items.push({
        name: "flour",
        quantity: "1 bags",
        description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
      });
      items.push({
        name: "Chocolate Chips",
        quantity: "3 bags",
        description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
      });

      service.getItems=function(){
          var deferred =$q.defer();

          $timeout(function(){
              deferred.resolve(items);
          },800);

          return deferred.promise;
      };
    }

})();