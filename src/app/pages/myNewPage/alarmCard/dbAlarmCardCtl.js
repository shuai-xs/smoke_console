/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .controller('dbAlarmCardCtl', dbAlarmCardCtl);

    /** @ngInject */
    function dbAlarmCardCtl($scope) {
        $scope.alarmNum = [10, 3];
    }
})();