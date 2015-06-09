

var myApp = angular.module('myApp', ['ngRoute']);



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



myApp.controller('mainController', ['$scope', '$log', function($scope,$log,nameService) {

  $scope.person = {
    name: 'John Doe',
    address: '555 Main St.'
  }





}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams',function($scope,$log,$routeParams,nameService) {






}]);

myApp.directive("searchResult", function() {
  return {

    templateUrl:  'directives/searchresult.html',
    replace: true,
    scope: {
      personObject: "="
    }
  };
});
