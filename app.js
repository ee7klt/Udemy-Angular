
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
weatherApp.service('stateService', function() {
  this.state = '';
});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$log', 'stateService', function ($scope, $log, stateService) {

  $log.log(stateService.state);
  $scope.state = stateService.state;


  $scope.$watch('state', function(newValue,oldValue) {   //call listener function if value function 'state' changes
    $log.log("old="+oldValue);
    $log.log("new="+newValue);
    stateService.state = $scope.state;

  });

}]);


weatherApp.controller('forecastController', ['$scope', '$log', 'stateService', function ($scope, $log, stateService) {
  $log.log(stateService.state);
  $scope.state = stateService.state;






}]);
