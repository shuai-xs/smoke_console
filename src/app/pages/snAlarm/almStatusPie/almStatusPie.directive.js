/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snAlarm')
        .directive('almStatusPie', almStatusPie);

    /** @ngInject */
    function almStatusPie() {
        return {
            restrict: 'EA',
            // replace: true,
            controller: 'almStatusPieCtrl',
            templateUrl: 'app/pages/snAlarm/almStatusPie/almStatusPie.html'
        };
    }
})();