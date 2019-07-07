/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .controller('snDashboardCtrl', snDashboardCtrl);

    /** @ngInject */
    function snDashboardCtrl($scope, $timeout, $state, $rootScope) {
        $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy hh:mm:ss', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };

        function open() {
            $scope.opened = true;
        }
        console.log('testDashboardCtrl');

        $rootScope.$on('pageResize', function(evt, next, current){
            setTimeout(function () {
                $state.reload('snDashboard');
            },50)

        });
    }

})();
