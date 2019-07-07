(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('curTemperature', curTemperature);

    function curTemperature() {
        return {
            restrict: 'EA',
            replace:true,
            controller:'curTemperatureCtrl',
            templateUrl: 'app/pages/myNewPage/curTemperature/curTemperature.html',
            scope:true
        };
    }
})();