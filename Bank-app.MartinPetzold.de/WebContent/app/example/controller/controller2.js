'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp2', []);

phonecatApp.controller('PhoneListCtrl2', ['$scope', '$http',
                                          
  function ($scope, $http) {
    $http.get('https://raw.githubusercontent.com/angular/angular-phonecat/24a13ca0a0513d6b3c0d8d770cef0cb094d4aab9/app/phones/phones.json').success(function(data) {
      $scope.phones = data;
      $scope.status=true;
    }).error(function(data, status, headers, config) {
        $scope.status=false;
      });

    $scope.orderProp = 'age';
  }]);