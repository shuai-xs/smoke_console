/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snData')
        .controller('snDataCtrl', snDataCtrl);

    /** @ngInject */
    function snDataCtrl($scope, $timeout,  $filter, editableOptions, editableThemes, $rootScope,$state) {

        console.log('alarm');
        $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy hh:mm:ss', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };

        function open() {
            $scope.opened = true;
        }
        console.log('snDataCtrl');


        var option = {
            grid:{
                top:10,
                left:40,
                right:10,
                bottom:40
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                nameTextStyle:{
                    color:'#ccc'
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                type: 'value',
                nameTextStyle:{
                    color:'#ccc'
                }
            },
            series: [{
                data: [60, 32, 54, 34, 90, 30, 20],
                type: 'line',
                color:'#4aacee',
                areaStyle: {
                    color:'#1a3d4c'
                },
                smooth: true
            }]
        };


        $scope.metricAreaConfig = {
            theme: 'dark',
            dataLoaded: true
        };
        $scope.metricAreaOption = option;

        $scope.isAlarmBar = true;


        $scope.smartTablePageSize = 8;

        $scope.smartTableData = [
            {
                id: 1,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 2,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 3,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 4,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 5,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 6,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 7,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 8,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 9,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 10,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 11,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 12,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 13,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 14,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 15,
                warehouse: '仓1',
                requirementName: '设备1',
                count: '1234',
                pickTime: '2016-09-21  08:50:08',
            }
        ];

        //区域图确认按钮
        $scope.onAreaChartConfirmClk = function(){
            console.log('confirm');
        };

        $scope.onTableExportClk = function(){
            console.log('onTableExportClk');
        };



        $scope.onClkAlmPieDate = function(dateType){
            console.log(dateType);
            console.log($('#data-piechart-datetimepicker1-start').data('DateTimePicker').date()._d.getTime());//已选择时间
            if(dateType === 'day'){

                $scope.dataTypeDay = 'sndata-date-type-color-select';
                $scope.dataTypeWeek = 'sndata-date-type-color';
                $scope.dataTypeMonth = 'sndata-date-type-color';
            }

            if(dateType === 'week'){

                $scope.dataTypeDay = 'sndata-date-type-color';
                $scope.dataTypeWeek = 'sndata-date-type-color-select';
                $scope.dataTypeMonth = 'sndata-date-type-color';
            }

            if(dateType === 'month'){

                $scope.dataTypeDay = 'sndata-date-type-color';
                $scope.dataTypeWeek = 'sndata-date-type-color';
                $scope.dataTypeMonth = 'sndata-date-type-color-select';
            }
        };

        $scope.dataTypeDay = 'sndata-date-type-color-select';
        $scope.dataTypeWeek = 'sndata-date-type-color';
        $scope.dataTypeMonth = 'sndata-date-type-color';



        $scope.editableTableData = $scope.smartTableData.slice(0, 36);
        $rootScope.$on('pageResize', function(evt, next, current){
            setTimeout(function () {
                $state.reload('snData');
            },100)

        });

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
    }

})();
