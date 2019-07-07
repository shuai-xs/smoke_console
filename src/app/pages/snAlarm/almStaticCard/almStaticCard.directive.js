(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snAlarm')
        .directive('almStaticCard', almStaticCard);

    /** @ngInject */
    function almStaticCard() {
        return {
            restrict: 'EA',
            replace:true,
            templateUrl: 'app/pages/snAlarm/almStaticCard/almStaticCard.html'
        };
    }
})();