
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
  this.customcity = '';
});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$log', 'cityService', function ($scope, $log,  cityService) {

  $log.log(cityService.customcity);
  $scope.city = cityService.customcity;


  $scope.$watch('city', function(newValue,oldValue) {   //call listener function if value function 'city' changes
    //$log.log("old="+oldValue);
    //$log.log("new="+newValue);
    cityService.customcity = $scope.city;

  });

}]);


weatherApp.controller('forecastController', ['$scope', '$log', '$resource', 'cityService', function ($scope, $log, $resource,  cityService) {
  $log.log(cityService.customcity);
  $scope.city = cityService.customcity;

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: 2});
    $scope.convertToFahrenheit = function (degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    }
    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    }











}]);
