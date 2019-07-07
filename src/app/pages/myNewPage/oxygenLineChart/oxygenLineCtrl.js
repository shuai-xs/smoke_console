/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snDashboard')
        .controller('oxygenLineCtrl', oxygenLineCtrl);

    /** @ngInject */
    function oxygenLineCtrl($scope) {
        var color=['#1a81e3','#fc6603','#fed76b','#ffe000','#ffa800','#ff5b00','#ff3000'];
        var option = {
            color:color,
            title: {
                text: '氧气浓度分布图',
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
                boundaryGap: false,
                data: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07'],
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
                nameTextStyle:{
                    color:'#cccccc',
                    fontSize:12
                },
                splitLine: {
                    show: true,
                    //  改变轴线颜色
                    lineStyle: {
                        color:'#cccccc',
                        type:'dotted'
                    }
                },
                max:100
            },
            series: [
                {
                    name: '综合仓',
                    type: 'line',
                    symbol:'circle',
                    data: [100, 60, 80, 90, 90, 35, 66],
                },
                {
                    name: '燃气仓',
                    type: 'line',
                    symbol:'circle',
                    data: [12, 20, 30, 60, 70, 60, 40]
                },
                {
                    name: '电力仓',
                    type: 'line',
                    symbol:'circle',
                    data: [50, 20, 30, 60, 70, 60, 40]
                }
            ]
        };
        $scope.oxygenLineChartConfig = {
            theme:'dark',
            dataLoaded:true
        };
        $scope.oxygenLineChartOption = option;
    }
})();