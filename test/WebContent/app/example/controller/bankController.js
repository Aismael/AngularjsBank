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
								$http({
									withCredentials : false,
									method : 'post',
									url : 'http://localhost:8080/bank-swt-neu-vor-14/rest/banktut',
									data : {
										name : $scope.name,
										sortCode : $scope.blz
									}
								
								}).success(function() {
									$scope.loadData();
								})
								
							};
							$scope.refresh = function() {$scope.loadData();};
						}

				]);
