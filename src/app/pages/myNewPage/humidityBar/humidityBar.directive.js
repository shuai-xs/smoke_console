(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('humidityBar', humidityBar);

    function humidityBar() {
        return {
            restrict: 'EA',
            replace:true,
            controller:'humidityBarCtrl',
            templateUrl: 'app/pages/myNewPage/humidityBar/humidityBar.html',
            scope:true
        };
    }
})();