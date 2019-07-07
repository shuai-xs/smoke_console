/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snAlarm')
        .controller('snAlarmCtrl', snAlarmCtrl);

    /** @ngInject */
    function snAlarmCtrl($scope, $timeout,$rootScope,$state) {

        console.log('alarm');
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
        console.log('snDashboardCtrl');

        $rootScope.$on('pageResize', function(evt, next, current){
            setTimeout(function () {
                $state.reload('snAlarm');
            },100)

        });
    }

})();
