// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$log', '$routeParams', 'cityService', function ($scope, $log, $routeParams, cityService) {

  $log.log(cityService.customcity);
  $scope.city = cityService.customcity;



  $scope.$watch('city', function(newValue,oldValue) {   //call listener function if value function 'city' changes
    //$log.log("old="+oldValue);
    //$log.log("new="+newValue);
    cityService.customcity = $scope.city;


  });



}]);


weatherApp.controller('forecastController', ['$scope', '$log', '$resource', '$routeParams', 'cityService',  function ($scope, $log, $resource, $routeParams, cityService) {
  $log.log(cityService.customcity);
  $scope.city = cityService.customcity;
  $scope.days = $routeParams.days || 2;
  $log.log($scope.days);

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days});

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