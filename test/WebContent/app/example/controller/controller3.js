'use strict';

/* Controllers */
var phonecatApp3 = angular.module('phonecatApp3', []);



phonecatApp3.controller('PhoneListCtrl3', ['$scope', '$http',
                                          
  function ($scope, $http) {
	

    $http.get('http://localhost:8080/bank-swt-neu-vor-14/rest/banktut').success(function(data) {
      $scope.phones = data;
      $scope.status=true;
    }).error(function(data, status, headers, config) {
        $scope.status=false;
      });

    $scope.orderProp = 'name';
  }]);

