(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snWarehouse', [])
        .config(routeConfig);

    angular.module('BlurAdmin.pages.snWarehouse').controller('snWarehouseCtl',['$scope', function ($scope) {

    }])
    /** @ngInject */
    function routeConfig($stateProvider) {

        $stateProvider
            .state('snWarehouse', {
                url: '/snWarehouse',
                templateUrl: 'app/pages/snWarehouse/snWarehouse.html',
                title: '分仓信息',
                sidebarMeta: {
                    order: 800,
                    icon:'assets/img/u478.png'
                },
                controller:'snWarehouseCtrl'
            });
    }

})();