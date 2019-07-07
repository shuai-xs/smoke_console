/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .config(config);

    /** @ngInject */
    function config(baConfigProvider, colorHelper, $provide) {
        $provide.decorator('$uiViewScroll', uiViewScrollDecorator);
        baConfigProvider.changeTheme({blur: true});


        // baConfigProvider.changeColors({
        //     default: 'rgba(#000000, 0.2)',
        //     defaultText: '#ffffff',
        //     dashboard: {
        //         white: '#ffffff',
        //     },
        // });
        //
        baConfigProvider.changeColors({
            default: '#4e4e55',
            defaultText: '#e2e2e2',
         dashboard: {
           white: '#000000',
         },
        });
    }

    /** @ngInject */
    function uiViewScrollDecorator($delegate, $anchorScroll, baUtil) {
        return function (uiViewElement) {
            if (baUtil.hasAttr(uiViewElement, "autoscroll-body-top")) {
                $anchorScroll();
            } else {
                $delegate(uiViewElement);
            }
        };
    }
})();
