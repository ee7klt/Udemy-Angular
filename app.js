
// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);




// ROUTES
weatherApp.config (function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController'
  })


});

// CUSTOM SERVICE
weatherApp.service('cityService', function() {
  this.city = '';
});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$log', 'cityService', function ($scope, $log, cityService) {

  $log.log(cityService.city);
  $scope.city = cityService.city;


  $scope.$watch('city', function(newValue,oldValue) {   //call listener function if value function 'city' changes
    $log.log("old="+oldValue);
    $log.log("new="+newValue);
    cityService.city = $scope.city;

  });

}]);


weatherApp.controller('forecastController', ['$scope', '$log', 'cityService', function ($scope, $log, cityService) {
  $log.log(cityService.city);
  $scope.city = cityService.city;






}]);
