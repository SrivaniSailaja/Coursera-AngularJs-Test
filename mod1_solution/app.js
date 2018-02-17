///<reference path="angular.min.js"/>
(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];

    function LunchCheckController($scope, $filter) {
        $scope.names = "";
        $scope.result = "";
        $scope.message="";
    }

    $scope.CheckFood = function () {

        var namesArr = $scope.names.split(',');

        if (namesArr > 0) {

            for (var i = 0; i < namesArr.length; i++) {
                if ((namesArr[i] == ' ') || (namesArr[i] == '')) {
                    $scope.message = 'We do NOT consider empty item(""||" ") as an item towards to the count';
                    namesArr.pop(namesArr[i])
                }


            }
            if (namesArr.length <= 3) {
                $scope.result = "Enjoy!";
            }
            else {
                $scope.result = "Too Much!";
            }
        }
        else {
            $scope.result = "Please enter data first";
        }

       
    }
})();