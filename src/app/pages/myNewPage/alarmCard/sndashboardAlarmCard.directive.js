(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('sndashboardAlarmCard', dashboardAlarmCard);

    /** @ngInject */
    function dashboardAlarmCard() {
        return {
            restrict: 'EA',
            replace:true,
            templateUrl: 'app/pages/myNewPage/alarmCard/alarmCard.html',
            controller:'dbAlarmCardCtl'
        };
    }
})();