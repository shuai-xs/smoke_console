/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('sndashboardPieChart', dashboardPieChart);

    /** @ngInject */
    function dashboardPieChart() {
        return {
            restrict: 'EA',
            replace: true,
            controller: 'snDashboardPieChartCtrl',
            templateUrl: 'app/pages/myNewPage/dashboardPieChart/sndashboardPieChart.html',
            scope:true
        };
    }
})();