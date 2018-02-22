///<reference path="angular.min.js"/>
(function () {
    'use strict;'
    angular.module('myFilterDemo', [])
    .controller('myFilterDemoController', myFilterDemoController)
    .filter("changeName", NameChangeFilter)
    .filter("truth", TruthFilter);

    myFilterDemoController.$inject = ['$scope', '$filter', 'changeNameFilter']
   
    function myFilterDemoController($scope, $filter, changeNameFilter) {
        $scope.name = "Sailu";
        $scope.stateOfBegin = "sad face";
        $scope.cookieCost = 0.45;

        $scope.sayMessage = function () {
            var msg = "Tommy is hungry.";
            var output = $filter('uppercase')(msg)
            return output;
        };

        $scope.sayNewMessage = function () {
            var msg = "Tommy is hungry.";
            msg = changeNameFilter(msg);
            //var output = $filter('uppercase')(msg)
            return msg;
        };

        $scope.feedTommy = function () {
            $scope.stateOfBegin = "happy face";
        };


    }

    function NameChangeFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("Tommy", "Goffy");
            return input;

        };
    }

    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }

    
})();