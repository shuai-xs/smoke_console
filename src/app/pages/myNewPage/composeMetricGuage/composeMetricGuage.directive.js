(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('composeMetricGuage', composeMetricGuage);

    function composeMetricGuage() {
        return {
            restrict: 'EA',
            replace:true,
            scope:{},
            controller:'composeMetricGuageCtrl',
            templateUrl: 'app/pages/myNewPage/composeMetricGuage/composeMetricGuage.html'
        };
    }
})();