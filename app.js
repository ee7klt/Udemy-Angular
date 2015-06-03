var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {

  $scope.name = 'Main';




}]);


myApp.controller('auxController', ['$scope', function($scope) {

  $scope.name = 'aux';




}]);
