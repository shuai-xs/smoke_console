/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snAlarm')
        .controller('almTableCtrl', almTableCtrl);

    /** @ngInject */
    function almTableCtrl($scope, $filter, editableOptions, editableThemes) {

        $scope.smartTablePageSize = 8;

        $scope.smartTableData = [
            {
                id: 1,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 2,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 3,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 4,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 5,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 6,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 7,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 8,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 9,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 10,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 11,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 12,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 13,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 14,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            },
            {
                id: 15,
                position: 'position',
                name: 'name',
                info: 'info',
                value: 'value',
                status: 'status',
                occurTime:'2016-09-21  08:50:08',
                clearTime:'2016-09-21  08:50:08',
                remark:'remark'
            }
        ];

        $scope.editableTableData = $scope.smartTableData.slice(0, 36);


        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
    }
})();