///<reference path="angular.min.js" />
(function () {
    'use strict;'
    angular.module('counterApp', []).
    controller('counterController', counterController);

    counterController.$inject=['$scope','$timeout'];

    function counterController($scope,$timeout) {

        $scope.counter = 0;

        $scope.upCounter = function () {
            $timeout(function () {
                $scope.counter++;
                console.log("counter Incremented");
            }, 2000);
           
            //setTimeout(function () {
            //    $scope.$apply(function () {
            //        $scope.counter++;
            //        console.log("counter Incremented");
            //    })
               
            //    //$scope.$digest();
            //}, 2000);
        }
       

    }


})();