///<reference path="angular.min.js" />
(function () {
    'use strict;'
    angular.module('counterApp', []).
    controller('counterController', counterController);

    counterController.$inject=['$scope'];

    function counterController($scope) {

        $scope.firstname="Srivani"

        $scope.showNumebrOfWatchers = function () {
            console.log("# of Watchers : " + $scope.$$watchersCount);
        };
          

        $scope.setFullName =function(){
            $scope.fullname =  $scope.firstname+" Sailaja";
        }
        $scope.logFirstName = function(){
            console.log($scope.firstname);
        }
        $scope.logFullName=function(){
            console.log($scope.firstname+" Sailaja");
        }
        
               
            
    }
       

}
)();