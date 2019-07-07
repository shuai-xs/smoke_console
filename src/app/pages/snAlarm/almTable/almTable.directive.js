/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snAlarm')
        .directive('almTable', almTable);

    /** @ngInject */
    function almTable() {
        return {
            restrict: 'EA',
            // replace: true,
            controller: 'almTableCtrl',
            templateUrl: 'app/pages/snAlarm/almTable/almTable.html'
        };
    }
})();