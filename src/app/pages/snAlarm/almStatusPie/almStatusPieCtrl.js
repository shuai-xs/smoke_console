/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snAlarm')
        .controller('almStatusPieCtrl', almStatusPieCtrl);

    /** @ngInject */
    function almStatusPieCtrl($scope) {
        console.log('abc');

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series: [
                {
                    color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                    type: 'pie',
                    radius: '50%',
                    center: ['17%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {value: 6, name: '温度'},
                        {value: 38, name: '湿度'},
                        {value: 28, name: '液位'},
                        {value: 20, name: '温度2'},
                        {value: 10, name: '湿度2'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{b} \n \n{c}%",
                            rich:{
                                c:{
                                    fontSize:16
                                }
                            },
                            textStyle: {
                                // fontSize: 30,

                            },
                            position: 'outside'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show:true,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 20,
                            length2: 10,
                            type:'dashed',
                            width:2
                        }
                    },
                },
                {
                    color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                    type: 'pie',
                    radius: '50%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {value: 6, name: '温度'},
                        {value: 38, name: '湿度'},
                        {value: 28, name: '液位'},
                        {value: 20, name: '温度2'},
                        {value: 10, name: '湿度2'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{b} \n \n{c}%",
                            rich:{
                                c:{
                                    fontSize:16
                                }
                            },
                            textStyle: {
                                // fontSize: 30,

                            },
                            position: 'outside'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show:true,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 20,
                            length2: 10,
                            type:'dashed',
                            width:2
                        }
                    },
                },
                {
                    color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                    type: 'pie',
                    radius: '50%',
                    center: ['83%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {value: 6, name: '温度'},
                        {value: 38, name: '湿度'},
                        {value: 28, name: '液位'},
                        {value: 20, name: '温度2'},
                        {value: 10, name: '湿度2'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{b} \n \n{c}%",
                            rich:{
                                c:{
                                    fontSize:16
                                }
                            },
                            textStyle: {
                                // fontSize: 30,

                            },
                            position: 'outside'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show:true,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 20,
                            length2: 10,
                            type:'dashed',
                            width:2
                        }
                    },
                }
            ]
        };

        $scope.onClkAlmPieDate = function(dateType){
            console.log(dateType);

            if(dateType === 'day'){

                $scope.dataTypeDay = 'almpie-date-type-color-select';
                $scope.dataTypeWeek = 'almpie-date-type-color';
                $scope.dataTypeMonth = 'almpie-date-type-color';
            }

            if(dateType === 'week'){

                $scope.dataTypeDay = 'almpie-date-type-color';
                $scope.dataTypeWeek = 'almpie-date-type-color-select';
                $scope.dataTypeMonth = 'almpie-date-type-color';
            }

            if(dateType === 'month'){

                $scope.dataTypeDay = 'almpie-date-type-color';
                $scope.dataTypeWeek = 'almpie-date-type-color';
                $scope.dataTypeMonth = 'almpie-date-type-color-select';
            }
        };

        $scope.dataTypeArr = ['almpie-date-type-color-select', 'almpie-date-type-color', 'almpie-date-type-color'];
        $scope.dataTypeDay = 'almpie-date-type-color-select';
        $scope.dataTypeWeek = 'almpie-date-type-color';
        $scope.dataTypeMonth = 'almpie-date-type-color';
        $.ajax({
            type: "POST",
            url: "/rest/getStatus",
            data: "name=John&location=Boston",
            success: function(msg){
                alert( "Data Saved: " + msg );
            }
        });

        $scope.almStatusPieConfig = {
            theme: 'dark',
            dataLoaded: true
        };
        $scope.almStatusPieOption = option;
    }
})();