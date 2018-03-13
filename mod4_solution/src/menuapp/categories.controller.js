(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('MenuApp',CategoriesController);

    CategoriesController.$inject=['items','data'];
    function CategoriesController(items){
      var categories=this;
      categories.items=data.getAllCategories();
    

      // mainList.$onInit=function(){
      //   ShoppingListService.getItems()
      //   .then(function(result){
      //       mainList.items=result;
      //   });
      // };
    }
})();