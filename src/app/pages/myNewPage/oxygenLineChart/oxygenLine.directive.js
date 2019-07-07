(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('oxygenLine', oxygenLine);

    function oxygenLine() {
        return {
            restrict: 'EA',
            replace:true,
            controller:'oxygenLineCtrl',
            templateUrl: 'app/pages/myNewPage/oxygenLineChart/oxygenLineChart.html',
            scope:true
        };
    }
})();