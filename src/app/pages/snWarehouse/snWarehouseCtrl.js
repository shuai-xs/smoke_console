/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.snWarehouse')
        .controller('snWarehouseCtrl', snWarehouseCtrl);

    /** @ngInject */
    function snWarehouseCtrl($scope, $timeout,  $filter, editableOptions, editableThemes,$rootScope,$state) {
        $rootScope.$on('pageResize', function(evt, next, current){
            setTimeout(function () {
                $state.reload('snWarehouse');
            },100)

        });

        // $scope.open = open;
        // $scope.opened = false;
        // $scope.formats = ['dd-MMMM-yyyy hh:mm:ss', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        // $scope.format = $scope.formats[0];
        // $scope.options = {
        //     showWeeks: false
        // };
        //
        // function open() {
        //     $scope.opened = true;
        // }
        console.log('snWarehouseCtrl');


        var option = {
            grid:{
                top:10,
                left:40,
                right:20,
                bottom:40
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
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


        $scope.warehouseAreaConfig = {
            theme: 'dark',
            dataLoaded: true
        };
        $scope.warehouseAreaOption = option;




        $scope.smartTablePageSize = 8;

        $scope.smartTableData = [
            {
                id: 1,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 2,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 3,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 4,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 5,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 6,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 7,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 8,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 9,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 10,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 11,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 12,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 13,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 14,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            },
            {
                id: 15,
                requirementName: '水阀1',
                status: '远程控制',
                operation: '2016-09-21  08:50:08',
            }
        ];

        $scope.editableTableData = $scope.smartTableData.slice(0, 36);


        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

        $(function () {
            //$('#warehouse-piechart-datetimepicker').data('DateTimePicker').date()._d.getTime()
            $('#warehouse-piechart-datetimepicker').datetimepicker({
                format: 'YYYY-MM-DD HH:mm',
                date: new Date()
            });

            $('#warehouse-datetimepicker1-start').datetimepicker({
                format: 'YYYY-MM-DD HH:mm',
                date: new Date()
            });

            $('#warehouse-datetimepicker1-end').datetimepicker({
                format: 'YYYY-MM-DD HH:mm',
                date: new Date()
            });


        });


        $(function () {
            var jssor_slider1_init = function () {
                var options = {
                    $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
                    $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                        $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                        $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                    }
                };

                var jssor_slider1 = new $JssorSlider$('slider1_container', options);
                jssor_slider1.$On($JssorSlider$.$EVT_PARK, function (slideIndex, event) {
                    console.log(slideIndex);
                    $scope.warehouseAreaOption.series[0].data = [60, 60, 60, 34, 90, 30, 20];
                });
            };
            jssor_slider1_init();
        })
    }

})();
