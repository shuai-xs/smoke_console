(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snAlarm', [])
        .config(routeConfig);

    // angular.module('BlurAdmin.pages.snAlarm').controller('snAlarmCtl',['$scope', function ($scope) {
    //
    // }])
    /** @ngInject */
    function routeConfig($stateProvider) {

        $stateProvider
            .state('snAlarm', {
                url: '/snAlarm',
                templateUrl: 'app/pages/snAlarm/snAlarm.html',
                title: '告警',
                sidebarMeta: {
                    order: 800,
                    icon:'assets/img/u531.png'
                },
                controller:'snAlarmCtrl'
            });
    }

})();