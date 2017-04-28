/**
 * Author:Phoebe Phoebe.Xinxin.Zhao@kingland.com Date:2017-3-9
 * Description:Module for report chart template
 */
'use strict';
var singleSelection = angular
		.module("reportChart", [ 'angular-simditor', 'ngSanitize' ])
		.directive(
				'reportChart',
				function($rootScope,NgTableParams,$sce,$http,toastr) {
					return {
						/**
						 * @description: get the parameter to control the chart
						 *                  
						 * @schools: get schools to be the abscissa 
						 *           
						 * @hiredCount:each school hired people
						 *                   
						 * @notHiredCount:each school not hired people
						 *                    
						 */
						scope : {
							data:'=',
							reportName : '=',
							startDate : '=',
							endDate : '=',
							calculate:"="
						},
						restrict : 'AE',
						templateUrl : '/global/template/report-chart-template/report-chart.html',
						link : function($scope) {
							
							
							
							$scope.calculateField = "";
							
							$scope.$watch("data",function(value,old){
								if(value.length!=0){
									dealData();
								}
							})
							
							$scope.downloadTemplate = function(){
									var reportData = $scope.data;
									$http({
										method : 'POST',
										url : '/report/downloadReportTable',
										data:reportData,
										headers : {
											 'Content-Type':'application/json'
										}
									}).success(function(data) {
										var $label = $('<a>');
								        $label.attr('href', "/applicant/downloadPage?filepathanswer="+data.filepath);
								        $label.attr('target', '_self');
								        $scope.canUpload = true;
								        window.open($label.attr('href'), $label.attr('target'));
									}).error(function() {
										toastr.error("download report fail!");
									})
								}
							
							   var dealData=function(){
								$scope.barLabels = new Array();
								
								$scope.barSeries = new Array();
								
								$scope.barData =  new Array();
								
								$scope.calculateData =  new Array();
								for(var i=0;i<$scope.data[0].length;i++){
									$scope.barLabels.push($scope.data[0][i].x);
								}
								for(var i=0;i<$scope.data.length;i++){
									
									$scope.barSeries.push($scope.data[i][0].y);
								
									
									var rowCellData=$scope.data[i];
									var partData=new Array();
									for(var k=0;k<rowCellData.length;k++){
										partData.push(rowCellData[k].number);
									}
									if($scope.calculate=="SUM"){
										$scope.calculateField="Sum"
										var count=0;
										for(var j=0;j<partData.length;j++){
											count=count+partData[j];
										}
										$scope.calculateData.push(count);
									}else{
										$scope.calculateField="Average"
										var count=0;
										for(var j=0;j<partData.length;j++){
											count=count+partData[j];
										}
										$scope.calculateData.push(count/(partData.length));
									}
									$scope.barData.push(partData);
									
								}
							}
														
							
						
						}
					}
				});



	
