///<reference path="angular.min.js"/>
(function () {
    'use strict;'
    angular.module('myFilterDemo', [])
    .controller('myFilterDemoController', myFilterDemoController)

    myFilterDemoController.$inject=['$scope','$filter']
   
    function myFilterDemoController($scope, $filter) {
        $scope.name = "Sailu";
        $scope.stateOfBegin = "sad face";
        $scope.cookieCost = 0.45;

        $scope.sayMessage = function () {
            var msg = "Tommy is hungry.";
            var output = $filter('uppercase')(msg)
            return output;
        };

        $scope.feedTommy = function () {
            $scope.stateOfBegin = "happy face";
        };


    }

    
})();