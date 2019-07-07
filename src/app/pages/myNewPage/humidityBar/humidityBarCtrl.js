/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .controller('humidityBarCtrl', humidityBarCtrl);

    /** @ngInject */
    function humidityBarCtrl($scope) {
        var color=['#49a9ee','#fed96c','#ff6700','#ffe000','#ffa800','#ff5b00','#ff3000'];
        var option = {
            color:color,
            title: {
                text: '湿度分布图',
                textStyle: {
                    color: '#999999',
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                itemWidth:10,
                right:10,
                data: [{name: '综合仓', icon: 'circle'}, {name: '燃气仓', icon: 'circle'}, {name: '电力仓', icon: 'circle'}],
                textStyle: {
                    color: '#cccccc',
                    fontSize: 12
                }
            },
            grid: {
                left: '1%',
                right: '5%',
                bottom: '3%',
                top:'18%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['01', '02', '03', '04', '05', '06'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#cccccc',
                        fontSize:'12'
                    }
                },
                // x轴的颜色和宽度
                axisLine:{
                    lineStyle:{
                        color:'#cccccc',
                        width:1,   //这里是坐标轴的宽度,可以去掉
                    }
                }

            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#cccccc',
                        fontSize:'12'
                    }
                },
                splitLine: {
                    show: true,
                    //  改变轴线颜色
                    lineStyle: {
                        color:'#cccccc',
                        type:'dotted'
                    }
                }
            },
            series: [
                {
                    name: '综合仓',
                    type: 'bar',
                    symbol:'circle',
                    barWidth:8,
                    data: [70, 60, 80, 90, 90, 35],
                },
                {
                    name: '燃气仓',
                    type: 'bar',
                    symbol:'circle',
                    barWidth:8,
                    data: [12, 20, 30, 60, 70, 60]
                },
                {
                    name: '电力仓',
                    type: 'bar',
                    symbol:'circle',
                    barWidth:8,
                    data: [50, 20, 30, 60, 70, 60]
                }
            ]
        };
        $scope.humidityBarConfig = {
            theme:'dark',
            dataLoaded:true
        };
        $scope.humidityBarOption = option;
    }
})();