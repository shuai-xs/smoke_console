/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .controller('composeMetricCtrl', composeMetricCtrl);

    /** @ngInject */
    function composeMetricCtrl($scope, $state) {
        $scope.onEnterWarehouse = function () {
            $state.go('snWarehouse');
        };

        var myRate1 = 100;
        var optionxxx = {
            snID:'composeMetric',
            backgroundColor: '#141845',
            grid: {
                top: '50%',
                left: '6%',
                right: '5.6%',
                bottom: '9%',
                containLabel: true
            },
            title: [{
                x: "12%",
                bottom: '8%',
                text: '氧气浓度',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: "#fff"
                },
            }, {
                x: "73%",
                bottom: '8%',
                text: '氧气浓度',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: "#fff"
                },
            },{
                text: '仓1',
                left: '44%',
                bottom: '8%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
                    color: '#fff',
                    textAlign: 'center',
                },
            }, {
                text: '仓2',
                right: '38%',
                bottom: '8%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                    textAlign: 'center',
                },
            }],
            tooltip: {
                show: false,


            },
            xAxis: {
                show: false,
                data: ['symbolRepeat: true', 'symbolRepeat: false']
            },
            animationEasing: 'elasticOut',
            yAxis: {
                show: false,
            },
            series: [
                {
                    type: 'gauge',
                    center: ['40%', '40%'], // 默认全局居中
                    radius: '42%',
                    splitNumber: 3, //刻度数量
                    min: 0,
                    max: 30,
                    startAngle: 135,
                    endAngle: 45,
                    clockwise: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#03B7C9']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#03B7C9',
                            width: 1
                        },
                        length: -3,
                        splitNumber: 3
                    },
                    splitLine: {
                        show: true,
                        length: -5,
                        lineStyle: {
                            color: '#03B7C9',
                        }
                    },
                    axisLabel: {
                        distance: -18,
                        textStyle: {
                            color: "#03B7C9",
                            fontSize: "12",
                            fontWeight: "bold"
                        }
                    },
                    pointer: {
                        show: true,
                        width: 3
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: myRate1
                    }]
                },
                {
                    type: 'gauge',
                    center: ['60%', '40%'], // 默认全局居中
                    radius: '42%',
                    splitNumber: 3, //刻度数量
                    min: 0,
                    max: 30,
                    startAngle: 135,
                    endAngle: 45,
                    clockwise: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#03B7C9']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#03B7C9',
                            width: 1
                        },
                        length: -3,
                        splitNumber: 3
                    },
                    splitLine: {
                        show: true,
                        length: -5,
                        lineStyle: {
                            color: '#03B7C9',
                        }
                    },
                    axisLabel: {
                        distance: -18,
                        textStyle: {
                            color: "#03B7C9",
                            fontSize: "12",
                            fontWeight: "bold"
                        }
                    },
                    pointer: {
                        show: true,
                        width: 3
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: myRate1
                    }]
                },
                {
                    type: 'gauge',
                    center: ['20%', '55%'], // 默认全局居中
                    radius: '60%',
                    splitNumber: 5, //刻度数量
                    min: 0,
                    max: 100, //在线交流评价刻度
                    endAngle: -45,
                    clockwise: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#03B7C9']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#03B7C9',
                            width: 1
                        },
                        length: -5,
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: -10,
                        lineStyle: {
                            color: '#03B7C9',
                        }
                    },
                    axisLabel: {
                        distance: -20,
                        textStyle: {
                            color: "#03B7C9",
                            fontSize: "12",
                            fontWeight: "bold"
                        }
                    },
                    pointer: { //仪表盘指针
                        show: 0
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: myRate1
                    }]
                }, {
                    name: '在线交流评价',
                    type: 'gauge',
                    endAngle: -45,
                    radius: '50%', //有颜色的半径
                    center: ['20%', '55%'], // 默认全局居中

                    min: 0,
                    max: 100,

                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            shadowBlur: 0,
                            color: [
                                [0.2, '#00FAFC'],
                                [0.4, '#3BD542'],
                                [0.6, '#E3F424'],
                                [0.8, '#7E48DA'],
                                [1, '#E531A8']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                        length: 20,

                    },

                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: true,
                        width: 3
                    },
                    detail: { //仪表盘数字的位置
                        show: true,
                        offsetCenter: [0, '70%'],
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#03B7C9",

                        }
                    },
                    data: [{
                        value: 65
                    }]
                }, {
                    type: 'gauge',
                    center: ['80%', '55%'], // 默认全局居中
                    radius: '60%',
                    splitNumber: 5, //刻度数量
                    min: 0,
                    max: 100,
                    //startAngle: 140,
                    endAngle: -45,
                    clockwise: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#03B7C9']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#03B7C9',
                            width: 1
                        },
                        length: -5,
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: -10,
                        lineStyle: {
                            color: '#03B7C9',
                        }
                    },
                    axisLabel: {
                        distance: -15,
                        textStyle: {
                            color: "#03B7C9",
                            fontSize: "12",
                            fontWeight: "bold"
                        }
                    },
                    pointer: { //仪表盘指针
                        show: 0
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: myRate1
                    }]
                }, {
                    name: '网站评价',
                    type: 'gauge',
                    // startAngle: 140,
                    endAngle: -45,
                    radius: '50%',
                    center: ['80%', '55%'], // 默认全局居中

                    min: 0,
                    max: 100,

                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            shadowBlur: 0,
                            color: [
                                [0.2, '#48aaee'],
                                [0.4, '#8898e6'],
                                [0.6, '#f4857c'],
                                [0.8, '#fed96c'],
                                [1, '#99da7b']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                        length: 20,

                    },

                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: true,
                        width: 3
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '70%'],
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#03B7C9",

                        }
                    },
                    data: [{
                        value: 50
                    }]
                },
                {
                    name: '正常',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolRepeat: true,
                    symbolSize: [20, 5],
                    symbolMargin: 2,
                    itemStyle: {
                        normal: {
                            color: {
                                colorStops: [{
                                    offset: 0, color: '#43F2A6' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#15CF7E' // 100% 处的颜色
                                }],
                            }
                        }

                    },
                    data: [{
                        value: 0.2,
                        symbolOffset: [60, '50%'],
                        label: {
                            show: true,
                            position: 'top',
                            offset: [60, 0],
                            color: '#ff632d',
                        }
                    }, {
                        value: 0.5,
                        symbolOffset: [-80, '50%'],
                        label: {
                            show: true,
                            position: 'top',
                            offset: [-80, 0],
                            color: '#ff632d',
                        }
                    }]
                },
                {
                    name: '异常',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolRepeat: true,
                    symbolSize: [20, 5],
                    symbolMargin: 2,
                    color: '#cccccc',
                    barGap: '-100%',
                    z: 1,
                    data: [{
                        value: 1,
                        symbolOffset: [60, '50%']
                    }, {
                        value: 1,
                        symbolOffset: [-80, '50%']
                    }]
                }

            ]
        };

        var option = {
            snID:'composeMetric',
            // backgroundColor: '#141845',
            // grid: {
            //     top: '50%',
            //     left: '6%',
            //     right: '5.6%',
            //     bottom: '9%',
            //     containLabel: true
            // },
            title: [
            ],
            tooltip: {
                show: false,


            },
            xAxis: {
                show: false,
                data: ['symbolRepeat: true', 'symbolRepeat: false']
            },
            animationEasing: 'elasticOut',
            yAxis: {
                show: false,
            },
            series: [
                //上一
                {
                    type: 'gauge',
                    center: ['38%', '30%'], // 默认全局居中
                    radius: '30%',
                    splitNumber: 3, //刻度数量
                    min: 0,
                    max: 30,
                    startAngle: 135,
                    endAngle: 45,
                    clockwise: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#03B7C9']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#03B7C9',
                            width: 1
                        },
                        length: -3,
                        splitNumber: 3
                    },
                    splitLine: {
                        show: true,
                        length: -5,
                        lineStyle: {
                            color: '#03B7C9',
                        }
                    },
                    axisLabel: {
                        distance: -18,
                        textStyle: {
                            color: "#03B7C9",
                            fontSize: "12",
                            fontWeight: "bold"
                        }
                    },
                    pointer: {
                        show: true,
                        width: 3
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '35%'],
                        textStyle: {
                            fontSize: 14
                        },
                        formatter: [
                            '{name|' + '湿度' + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 30,
                                color: '#ddd'
                            }
                        }
                    },
                    data: [{
                        name: "",
                        value: 30
                    }]
                },
                //上二
                {
                    type: 'gauge',
                    center: ['62%', '30%'], // 默认全局居中
                    radius: '30%',
                    splitNumber: 3, //刻度数量
                    min: 0,
                    max: 30,
                    startAngle: 135,
                    endAngle: 45,
                    clockwise: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#03B7C9']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#03B7C9',
                            width: 1
                        },
                        length: -3,
                        splitNumber: 3
                    },
                    splitLine: {
                        show: true,
                        length: -5,
                        lineStyle: {
                            color: '#03B7C9',
                        }
                    },
                    axisLabel: {
                        distance: -18,
                        textStyle: {
                            color: "#03B7C9",
                            fontSize: "12",
                            fontWeight: "bold"
                        }
                    },
                    pointer: {
                        show: true,
                        width: 3
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '35%'],
                        textStyle: {
                            fontSize: 14
                        },
                        formatter: [
                            '{name|' + '湿度' + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 30,
                                color: '#ddd'
                            }
                        }
                    },
                    data: [{
                        name: "",
                        value: myRate1
                    }]
                },
                //左一
                {
                    type: 'gauge',
                    center: ['18%', '58%'], // 默认全局居中
                    radius: '45%',
                    splitNumber: 5, //刻度数量
                    min: 0,
                    max: 100, //在线交流评价刻度
                    endAngle: -45,
                    clockwise: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#03B7C9']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#03B7C9',
                            width: 1
                        },
                        length: -5,
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: -10,
                        lineStyle: {
                            color: '#03B7C9',
                        }
                    },
                    axisLabel: {
                        distance: -20,
                        textStyle: {
                            color: "#03B7C9",
                            fontSize: "12",
                            fontWeight: "bold"
                        }
                    },
                    pointer: { //仪表盘指针
                        show: 0
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: myRate1
                    }]
                },
                {
                    name: '氧气浓度',
                    type: 'gauge',
                    endAngle: -45,
                    radius: '35%', //有颜色的半径
                    center: ['18%', '58%'], // 默认全局居中

                    min: 0,
                    max: 100,

                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            shadowBlur: 0,
                            color: [
                                [0.2, '#48aaee'],
                                [0.4, '#8898e6'],
                                [0.6, '#f4857c'],
                                [0.8, '#fed96c'],
                                [1, '#99da7b']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                        length: 20,

                    },

                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: true,
                        width: 3
                    },
                    detail: { //仪表盘数字的位置
                        show: true,
                        offsetCenter: [0, '90%'],
                        textStyle: {
                            fontSize: 14
                        },
                        formatter: [
                            '{value} ' + ('%' || ''),
                            '{name|' + '氧气浓度' + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 30,
                                color: '#ddd'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#03B7C9",

                        }
                    },
                    data: [{
                        value: 65
                    }]
                },

                //右一
                {
                    type: 'gauge',
                    center: ['82%', '58%'], // 默认全局居中
                    radius: '45%',
                    splitNumber: 5, //刻度数量
                    min: 0,
                    max: 100,
                    //startAngle: 140,
                    endAngle: -45,
                    clockwise: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#03B7C9']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#03B7C9',
                            width: 1
                        },
                        length: -5,
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: -10,
                        lineStyle: {
                            color: '#03B7C9',
                        }
                    },
                    axisLabel: {
                        distance: -15,
                        textStyle: {
                            color: "#03B7C9",
                            fontSize: "12",
                            fontWeight: "bold"
                        }
                    },
                    pointer: { //仪表盘指针
                        show: 0
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: myRate1
                    }]
                }, {
                    name: '网站评价',
                    type: 'gauge',
                    // startAngle: 140,
                    endAngle: -45,
                    radius: '35%',
                    center: ['82%', '58%'], // 默认全局居中

                    min: 0,
                    max: 100,

                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            shadowBlur: 0,
                            color: [
                                [0.2, '#48aaee'],
                                [0.4, '#8898e6'],
                                [0.6, '#f4857c'],
                                [0.8, '#fed96c'],
                                [1, '#99da7b']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                        length: 20,

                    },

                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: true,
                        width: 3
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '90%'],
                        textStyle: {
                            fontSize: 14
                        },
                        formatter: [
                            '{value} ' + ('%' || ''),
                            '{name|' + '氧气浓度' + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 30,
                                color: '#ddd'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#03B7C9",

                        }
                    },
                    data: [{
                        value: 50
                    }]
                },
                // {
                //     name: '正常',
                //     type: 'pictorialBar',
                //     symbol: 'rect',
                //     symbolRepeat: true,
                //     symbolSize: [20, 5],
                //     symbolMargin: 2,
                //     itemStyle: {
                //         normal: {
                //             color: {
                //                 colorStops: [{
                //                     offset: 0, color: '#43F2A6' // 0% 处的颜色
                //                 }, {
                //                     offset: 1, color: '#15CF7E' // 100% 处的颜色
                //                 }],
                //             }
                //         }
                //
                //     },
                //     data: [{
                //         value: 0.2,
                //         symbolOffset: [60, '50%'],
                //         label: {
                //             show: true,
                //             position: 'top',
                //             offset: [60, 0],
                //             color: '#ff632d',
                //         }
                //     }, {
                //         value: 0.5,
                //         symbolOffset: [-80, '50%'],
                //         label: {
                //             show: true,
                //             position: 'top',
                //             offset: [-80, 0],
                //             color: '#ff632d',
                //         }
                //     }]
                // },
                // {
                //     name: '异常',
                //     type: 'pictorialBar',
                //     symbol: 'rect',
                //     symbolRepeat: true,
                //     symbolSize: [20, 5],
                //     symbolMargin: 2,
                //     color: '#cccccc',
                //     barGap: '-100%',
                //     z: 1,
                //     data: [{
                //         value: 1,
                //         symbolOffset: [60, '50%']
                //     }, {
                //         value: 1,
                //         symbolOffset: [-80, '50%']
                //     }]
                // }

            ]
        };
        $scope.records = [0,1,2,0,0,0,0,0,0,0];
        $scope.composeMetricConfig = {
            theme:'dark',
            dataLoaded:true
        };
        $scope.composeMetricOption = option;


        $scope.onRefreshMetric = function () {
            option.series[0].data[0].value = 20;
        };
    }
})();