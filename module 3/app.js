(function(){
'use stict';
angular.module('DIApp',[])
.controller('DiController',DiController);

DiController.$inject =['$scope','$filter'];
function DiController($scope,$filter,$injector){
  $scope.name="srivani";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
//console.log($injector.annotate(DiController));
}


})();
