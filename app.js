

var myApp = angular.module('myApp', ['ngRoute']);


myApp.service('nameService', function() {

  var self = this;
  this.name = 'John Doe';
  this.namelength = function() {
    return self.name.length;
  };
});

myApp.config(function ($routeProvider) {
  $routeProvider

  .when('/',{
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller:'secondController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller:'secondController'
  })
});



myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope,$log,nameService) {

  $scope.name = nameService.name;
$log.log(nameService.namelength());
$log.log(nameService.name);
$scope.$watch('name', function() {
  nameService.name = $scope.name;
});





}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope,$log,$routeParams,nameService) {

  $scope.name = nameService.name;
  $scope.num = $routeParams.num || 0;
  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  });

  //$log.log($log);
//  $log.log($scope);





}]);
