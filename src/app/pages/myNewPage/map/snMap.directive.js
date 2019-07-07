(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('snMap', snMap);

    function snMap() {
        return {
            restrict: 'EA',
            replace:true,
            controller:'snMapCtrl',
            templateUrl: 'app/pages/myNewPage/map/snMap.html',
            scope:true
        };
    }
})();