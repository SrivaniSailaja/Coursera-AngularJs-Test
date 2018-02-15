(function(){
  'use strict';
  angular.module("calculatorApp",[])
  .controller("firstController",function($scope){
    $scope.name="";
    $scope.totalvalue=0;

    $scope.dispalyNumeric = function(){
         var totalnumericValue =
            calculateNumericOfString($scope.name);
            $scope.totalvalue=totalnumericValue;

         };
function calculateNumericOfString(string){
  var totalStringValue =0;
  for(var i=0;i<string.length;i++){
    totalStringValue +=string.charCodeAt(i);
  }
  return totalStringValue
}



  })
})();
