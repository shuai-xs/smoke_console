(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .directive('composeMetric', composeMetric);

    function composeMetric() {
        return {
            restrict: 'EA',
            replace:false,
            controller:'composeMetricCtrl',
            templateUrl: 'app/pages/myNewPage/composeMetric/composeMetric.html',
            scope:true
        };
    }
})();