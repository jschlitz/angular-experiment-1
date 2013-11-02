'use strict';

/* Controllers */

/*global angular*/
angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
    .controller('MyCtrl3', ['$scope', function($scope){
      $scope.theList = ['foo', 'bar', 'baz'];

      $scope.removeThing = function (x){
        console.log(x);
        $scope.theList.splice($scope.theList.indexOf(x), 1);
      };

      $scope.addThing = function (x){
        console.log(x);
        $scope.theList.push(x);

      };
}]);