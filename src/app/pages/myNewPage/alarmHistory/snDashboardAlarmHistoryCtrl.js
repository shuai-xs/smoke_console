/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .controller('sndashboardAlarmHistoryCtrl', DashboardAlarmHistoryCtrl);

    /** @ngInject */
    function DashboardAlarmHistoryCtrl($scope, $timeout,  $filter, editableOptions, editableThemes) {
        var dataAxis = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30' ];
        var data = [220, 182, 191, 234, 290, 330];
        var yMax = 500;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }

        var option = {
            grid:{
                left:'30',
                right:'1%',
                bottom:'20',
                top:'3%'
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    // inside: true,
                    textStyle: {
                        color: '#767a7d'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    barWidth:15,
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    barWidth:15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        };
        $scope.alarmHistoryConfig = {
            theme:'dark',
            dataLoaded:true
        };
        $scope.alarmHistoryOption = option;

        $scope.clkHistoryBar = function(){
            if(!$scope.displayAlmBar){
                $scope.displayAlmBar = true;
                $scope.alarmbar = 'alarm-history-active';
                $scope.alarmtable = 'alarm-history-noactive';
            }
        };

        $scope.clkCurTable = function(){
            if($scope.displayAlmBar){
                $scope.displayAlmBar = false;
                $scope.alarmbar = 'alarm-history-noactive';
                $scope.alarmtable = 'alarm-history-active';
            }
        };

        $scope.displayAlmBar = true;
        $scope.alarmbar = 'alarm-history-active';
        $scope.alarmtable = 'alarm-history-noactive';

        $scope.smartTablePageSize = 5;

        $scope.smartTableData = [
            {
                id: 1,
                warehouse: '仓1',
                requirementName: '设备1',
                percent: 50,
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 2,
                warehouse: '仓1',
                requirementName: '设备1',
                percent: 50,
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 3,
                warehouse: '仓1',
                requirementName: '设备1',
                percent: 50,
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 4,
                warehouse: '仓1',
                requirementName: '设备1',
                percent: 50,
                pickTime: '2016-09-21  08:50:08',
            },
            {
                id: 5,
                warehouse: '仓1',
                requirementName: '设备1',
                percent: 50,
                pickTime: '2016-09-21  08:50:08',
            }
        ];

        $scope.editableTableData = $scope.smartTableData.slice(0, 36);

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
    }
})();