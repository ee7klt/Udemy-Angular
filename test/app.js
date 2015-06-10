var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', '$http', function($scope,$filter,$timeout,$http) {

  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

$http.get('http://localhost:3000/people')

.success(function (result) {
  $scope.rules = result;
})
.error(function (data, status) {
  console.log(data);
});

$scope.newRule = '';
$scope.addRule = function() {
  $http.post('http://localhost:3000/people',{name: $scope.newRule})
  .success(function (result) {
    $scope.rules.push(result);
    $scope.newRule= '';
  })
  .error (function (data,status) {
    console.log(data);
  })
};


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


    $scope.alertClick = function() {
      console.log("Clicked!");
    }


}]);
