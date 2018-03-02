///<reference path="angular.min.js" />
(function () {
    'use strict;'

    angular.module('prototypeApp', [])
    .controller('ctrlParent1', ctrlParent1)
    .controller('ctrlChild1', ctrlChild1)
    .controller('ctrlParent2', ctrlParent2)
    .controller('ctrlChild2', ctrlChild2);

    ctrlParent1.$inject = ['$scope'];
    function ctrlParent1($scope) {
        $scope.parentValue = 1;
        $scope.pc = this;
        $scope.pc.parentValue = 1;
    }

    ctrlChild1.$inject = ['$scope'];
    function ctrlChild1($scope) {
        //console.log("$scope.parentValue :", $scope.parentValue);
        //console.log($scope);

        //$scope.parentValue = 5;
        //console.log("***CHANGED $scope.parentValue :", $scope.parentValue);
        //console.log($scope);

        //console.log("*******************");
        //console.log("$scope.pc.parentValue :", $scope.pc.parentValue);
        //$scope.pc.parentValue = 10;
        //console.log($scope);

    }

    ctrlParent2.$inject = ['$scope'];
    function ctrlParent2($scope) {
        var parent = this;
        parent.value = 1;
    }

    ctrlChild2.$inject = ['$scope'];
    function ctrlChild2($scope) {
        var child = this;
        child.value = 5;
        console.log("ctrlChild2 $Scope", $scope);

    }
})();