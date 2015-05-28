var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope,$filter,$timeout) {

  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  $scope.rules = [
    {rulename: "Must be 5 characters"},
    {rulename: "Must not be used elsewhere"},
    {rulename: "Must be cool"}

  ];

  console.log($scope.rules);


  if(!"DEBUG") {
    $scope.$watch('handle', function(newValue, oldValue) {

      console.info('Changed!');
      console.log('Old:' + oldValue);
      console.log('New:' + newValue);
    });

  $timeout(function() {



        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');


      }, 3000);
    }





}]);
