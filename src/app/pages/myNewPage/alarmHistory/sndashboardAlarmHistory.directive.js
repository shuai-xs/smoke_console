(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('sndashboardAlarmHistory', sndashboardAlarmHistory);

    function sndashboardAlarmHistory() {
        return {
            restrict: 'EA',
            replace:true,
            controller:'sndashboardAlarmHistoryCtrl',
            templateUrl: 'app/pages/myNewPage/alarmHistory/alarmHistory.html',
            scope:true
        };
    }
})();