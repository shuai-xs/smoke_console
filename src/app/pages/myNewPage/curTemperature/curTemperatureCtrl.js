/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .controller('curTemperatureCtrl', curTemperatureCtrl);

    /** @ngInject */
    function curTemperatureCtrl($scope) {
        var dataAxis = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', ];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90];
        var yMax = 500;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }

        var option = {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            title: [{
                text: '比目标值偏高5',
                left: '14%',
                top: '82%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
                    color: '#989898',
                    textAlign: 'center',
                },
            }, {
                text: '比目标值偏高5',
                left: '48%',
                top: '82%',
                textAlign: 'center',
                textStyle: {
                    color: '#989898',
                    fontWeight: 'normal',
                    fontSize: '12',
                    textAlign: 'center',
                },
            }, {
                text: '比目标值偏高5',
                left: '82%',
                top: '82%',
                textAlign: 'center',
                textStyle: {
                    color: '#989898',
                    fontWeight: 'normal',
                    fontSize: '12',
                    textAlign: 'center',
                },
            }],
            legend: {
                "left": "right",
                "top": "top",
                "show": true,
                "orient": "vertical",
                "textStyle": {
                    "color": "#333",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 12
                }
            },
            series: [{
                name: '',
                type: 'gauge',
                center: ['16%', '45%'], // 默认全局居中
                radius: '60',
                axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.8, '#47a9ed'],
                            [1, 'rgba(255, 255, 255)']
                        ],
                        width: 7
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    "padding": [-30, -30, -40, -30],
                    "color": "#b9b9b9",
                    "fontSize": 13
                },
                min:0,
                max:100,
                splitNumber: 1,
                pointer: {
                    show: false,
                    length: '0',
                    width: '0'
                },
                detail: {
                    formatter: '{value}°',
                    offsetCenter: [0, '5%'],
                    fontSize:24
                },
                data: [{
                    value: 80,
                    label: {
                        textStyle: {
                            fontSize: 8
                        }
                    }
                }]
            }, {
                name: '',
                type: 'gauge',
                center: ['50%', '45%'], // 默认全局居中
                radius: '60',
                axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.8, '#fccd32'],
                            [1, 'rgba(255, 255, 255)']
                        ],
                        width: 7
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    "padding": [-30, -30, -40, -30],
                    "color": "#b9b9b9",
                    "fontSize": 13
                },
                min:0,
                max:100,
                splitNumber: 1,
                pointer: {
                    show: false,
                    length: '0',
                    width: '0'
                },
                detail: {
                    formatter: '{value}°',
                    offsetCenter: [0, '5%'],
                    fontSize:24
                },
                data: [{
                    value: 80,
                    label: {
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }]
            }, {
                name: '',
                type: 'gauge',
                center: ['84%', '45%'], // 默认全局居中
                radius: '60',
                axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.8, '#fe6900'],
                            [1, 'rgba(255, 255, 255)']
                        ],
                        width: 7
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    "padding": [-30, -30, -40, -30],
                    "color": "#b9b9b9",
                    "fontSize": 13
                },
                min:0,
                max:100,
                splitNumber: 1,
                pointer: {
                    show: false,
                    length: '0',
                    width: '0'
                },
                detail: {
                    formatter: '{value}°',
                    offsetCenter: [0, '5%'],
                    fontSize:24
                },
                data: [{
                    value: 80,
                    label: {
                        textStyle: {
                            fontSize: 12
                        }
                    }
                }]
            }]
        };
        $scope.curTemperatureConfig = {
            theme:'dark',
            dataLoaded:true
        };
        $scope.curTemperatureOption = option;
    }
})();