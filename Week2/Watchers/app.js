///<reference path="angular.min.js" />
(function () {
    'use strict;'
    angular.module('counterApp', []).
    controller('counterController', counterController);

    counterController.$inject=['$scope'];

    function counterController($scope) {

        $scope.onceCounter = 0;
        $scope.counter = 0;

        $scope.showNumebrOfWatchers = function () {
            console.log("# of Watchers : "+$scope.$$watchersCount);
        };

        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        }

        $scope.upCounter = function () {
            $scope.counter++;
        }

        $scope.$watch("onceCounter", function (oldValue, newValue) {
            console.log("old value :", oldValue);
            console.log("new value :", newValue);
        });

        $scope.$watch("counter", function (oldValue, newValue) {
            console.log("old value counter :", oldValue);
            console.log("new value counter :", newValue);
        });
    }


})();