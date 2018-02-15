(function(){
'use stict';
angular.module('DIApp',[])
.controller('DiController00',DIController);

function DIController($scope,$filter){
  $scope.name="srivani";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

}


})();
