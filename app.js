
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', '$http', '$log', '$location', function($scope,$filter,$timeout,$http,$log,$location) {

  $log.info('helloworld');
  $log.info($location.path());





}]);
