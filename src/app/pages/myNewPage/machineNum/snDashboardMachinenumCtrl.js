/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .controller('snDashboardMachinenumCtrl', DashboardMachinenumCtrl);

    /** @ngInject */
    function DashboardMachinenumCtrl($scope) {
        console.log('abc');

        var color = ['#48aaee', '#99da7b', '#fed96c', '#f4857c', '#8898e6', '#ff5b00', '#ff3000'];
        var option = {
            color: color,
            title: {
                text: '178',
                subtext: '总设备(台)',
                left: 65,
                top: 60,
                textStyle: {
                    color: '#ccc',
                    fontSize: 32
                },
                subtextStyle: {
                    color: '#ccc'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'auto',
                itemHeight: 10,
                x: 'right',
                data: [{name: '传感器 176台', icon: 'circle'},
                    {name: '传感器 10台', icon: 'circle'},
                    {icon: 'circle', name: '传感器 16台'},
                    {name: '传感器 19台', icon: 'circle'},
                    {name: '传感器 12台', icon: 'circle'}],
                top: 35,
                right: '20%',
                left: 200,
                textStyle: {
                    color: '#ccc',
                    fontSize: 12
                }
            },
            grid: {
                left: '10%',
                width: 100
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: [55, 70],
                    center: ['25%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 335, name: '传感器 176台', itemStyle: {
                                normal: {
                                    borderWidth: 5,
                                    shadowBlur: 20,
                                    borderColor: color[0],
                                    shadowColor: color[0]
                                }
                            }
                        },
                        {
                            value: 310, name: '传感器 10台', itemStyle: {
                                normal: {
                                    borderWidth: 5,
                                    shadowBlur: 20,
                                    borderColor: color[1],
                                    shadowColor: color[1]
                                }
                            }
                        },
                        {
                            value: 234, name: '传感器 16台', itemStyle: {
                                normal: {
                                    borderWidth: 5,
                                    shadowBlur: 20,
                                    borderColor: color[2],
                                    shadowColor: color[2]
                                }
                            }
                        },
                        {
                            value: 135, name: '传感器 19台', itemStyle: {
                                normal: {
                                    borderWidth: 5,
                                    shadowBlur: 20,
                                    borderColor: color[3],
                                    shadowColor: color[3]
                                }
                            }
                        },
                        {
                            value: 1548, name: '传感器 12台', itemStyle: {
                                normal: {
                                    borderWidth: 5,
                                    shadowBlur: 20,
                                    borderColor: color[4],
                                    shadowColor: color[4]
                                }
                            }
                        }
                    ]
                }
            ]
        };

        $scope.machineConfig = {
            theme: 'dark',
            dataLoaded: true
        };
        $scope.machineOption = option;
    }
})();