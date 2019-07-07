(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snData', [])
        .config(routeConfig);

    angular.module('BlurAdmin.pages.snData').controller('snDataCtl',['$scope', function ($scope) {

    }])
    /** @ngInject */
    function routeConfig($stateProvider) {

        $stateProvider
            .state('snData', {
                url: '/snData',
                templateUrl: 'app/pages/snData/snData.html',
                title: '数据查询',
                sidebarMeta: {
                    order: 800,
                    icon:'assets/img/u521.png'
                },
                controller:'snDataCtrl'
            });
    }

})();