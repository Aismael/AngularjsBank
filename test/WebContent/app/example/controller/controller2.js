'use strict';

/* Controllers */
var phonecatApp2 = angular.module('phonecatApp2', []);



phonecatApp2.controller('PhoneListCtrl2', ['$scope', '$http',
                                          
  function ($scope, $http) {
	

    $http.get('https://raw.githubusercontent.com/Aismael/AngularjsBank/master/Bank-app.MartinPetzold.de/WebContent/app/example/data/phones.json').success(function(data) {
      $scope.phones = data;
      $scope.status=true;
    }).error(function(data, status, headers, config) {
        $scope.status=false;
      });

    $scope.orderProp = 'age';
  }]);

