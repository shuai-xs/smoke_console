(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard', ["ui.router"])
        .config(routeConfig);

    angular.module('BlurAdmin.pages.snDashboard').controller('snDashboardCtl',['$scope', function ($scope) {

    }])
    /** @ngInject */
    function routeConfig($stateProvider) {

        $stateProvider
            .state('snDashboard', {
                url: '/snDashboard',
                templateUrl: 'app/pages/myNewPage/snDashboard.html',
                title: '隧能信息',
                sidebarMeta: {
                    icon: 'assets/img/u516.png',
                    order: 800,
                },
                controller:'snDashboardCtrl'
            });
    }

})();