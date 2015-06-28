// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$log', '$routeParams', '$location', 'cityService', function ($scope, $log, $routeParams, $location, cityService) {

  $log.log(cityService.customcity);
  $scope.city = cityService.customcity;

  $scope.$watch('city', function(newValue,oldValue) {   //call listener function if value function 'city' changes
  //$log.log("old="+oldValue);
  //$log.log("new="+newValue);
  cityService.customcity = $scope.city;
});

$scope.submit = function() {
  $location.path("/forecast/2");
}



}]);


weatherApp.controller('forecastController', ['$scope', '$log', '$resource', '$routeParams', 'cityService', 'weatherService', function ($scope, $log, $resource, $routeParams, cityService, weatherService) {
  $log.log(cityService.customcity);
  $scope.city = cityService.customcity;
  $scope.days = $routeParams.days || 2;
  $log.log($scope.days);


  $scope.weatherResult = weatherService.getWeather($scope.city,$scope.days);


  $scope.convertToFahrenheit = function (degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  }
  $scope.convertToDate = function(dt) {
    return new Date(dt * 1000);
  }

  //  $scope.daysClicked = function () {
  //  $scope.class = "bg-primary";
  //}












}]);
