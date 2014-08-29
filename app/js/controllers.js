'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
  .controller('MyCtrl1', ['$scope', function($scope, userMan) {
    $scope.user = '';
    $scope.password = '';
    $scope.login = function() {
      userMan.login($scope.user, $scope.password).then(function(u) {console.log(u); alert(u.user_type);});
    }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
