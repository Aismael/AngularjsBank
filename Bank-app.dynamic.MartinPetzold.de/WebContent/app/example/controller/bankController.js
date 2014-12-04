'use strict';

/* Controllers */
var Bankapp = angular.module('bankapp', []);

Bankapp
		.controller(
				'BankListCtrl',
				[
						'$scope',
						'$http',

						function($scope, $http) {
							$scope.loadData= function() {
							$http
									.get(
											'http://localhost:8080/bank-swt-neu-vor-14/rest/banktut')
									.success(function(data) {
										$scope.banks = data;
										$scope.status = true;
									}).error(
											function(data, status, headers,
													config) {
												$scope.status = false;
											});
							};
							$scope.loadData();
							$scope.orderProp = 'name';
							
							$scope.add = function() {
					
								if($scope.blzInput.blz.$valid && $scope.blzInput.blz.$dirty){
								$http({
									withCredentials : false,
									method : 'post',
									url : 'http://localhost:8080/bank-swt-neu-vor-14/rest/banktut',
									data : {
										name : $scope.name,
										sortCode : $scope.blzInput.blz.$viewValue
									}
								
								}).success(function() {
									$scope.loadData();
								})
								}
							};
							$scope.del = function() {
								$http({
									withCredentials : false,
									method : 'delete',
									url : 'http://localhost:8080/bank-swt-neu-vor-14/rest/banktut'+'/'+$scope.id,
									
								
								}).success(function() {
									$scope.loadData();
								})
								
							};
							$scope.refresh = function() {$scope.loadData();};
						}

				]);
