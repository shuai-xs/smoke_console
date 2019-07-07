/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('sndashboardMachinenum', dashboardMachinenum);

    /** @ngInject */
    function dashboardMachinenum() {
        return {
            restrict: 'EA',
            replace: true,
            controller: 'snDashboardMachinenumCtrl',
            templateUrl: 'app/pages/myNewPage/machineNum/sndashboardMachinenum.html',
            scope:true
        };
    }
})();