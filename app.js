

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

  $scope.people = [

  {
    name: 'John Doe',
    address: '555 Main St.',
    city: 'New York',
    state: 'NY'
  },
  {  name: 'Jane Doe',
    address: '333 South St.',
    city: 'Miami',
    state: 'FL'
    }
  ]

  $scope.formattedAddress =  function(person) {
    return person.address+', ' + person.city+', '+person.state;
  }

//console.log($scope.formattedAddress($scope.person));




}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams',function($scope,$log,$routeParams,nameService) {






}]);

myApp.directive("searchResult", function() {
  return {
    restrict: 'AECM',
    templateUrl:  'directives/searchresult.html',
    replace: true,
    scope: {
      personObject: "=",
      formattedAddressFunction: "&"
    },
    transclude: true

  };
});
