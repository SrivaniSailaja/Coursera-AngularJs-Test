(function(){
    'use strict';

    angular.module('MenuApp')
    .component('MenuApp',{
        templateUrl:'src/menuapp/templates/categories.template.html',
        bindings:{
            items:'<'
        }
    });
})();