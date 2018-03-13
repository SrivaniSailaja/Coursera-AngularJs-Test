(function(){
    'use strict';

    angular.module('Spinner')
    .component('loadingSpinner',{
        templateUrl:'src/spinner/loadingspinner.template.html',
        controller:SpinnerController
    });

    SpinnerController.$inject=['$rootScope']
    function SpinnerController($rootScope){
        var $ctrl = this;
        var cancellers=[];

        ctrl.$onInit= function(){
            var cancel = $rootScope.$on('$stateChangeStrat',
            function(event,toState,toParams,fromState,fromParams){
                $ctrl.showSpinner= true;
            });
            cancellers=push(cancel);

            
        }
    }
})();