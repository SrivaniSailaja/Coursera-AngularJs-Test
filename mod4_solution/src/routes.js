(function(){
    'use strict';

    angular.module('MenuApp')
    .config('RoutesConfig')

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
        .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: 'CategiriesController as ctrl',
    //     resolve:{
    //   items:['ShoppingListService',
    //   function(ShoppingListService)
    //         {
    //         return ShoppingListService.getItems();
    //         }]
    //     }
     })
    // .state('mainList.itemDetail', {
    // url: '/item-detail/{itemId}',
    // templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    // controller: 'ItemDetailController as itemDetail'
    
  //})
}
})();