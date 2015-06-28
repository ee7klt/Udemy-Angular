

// CUSTOM DIRECTIVE

weatherApp.directive("daytimeTemp", function() {
  return {
    templateUrl: 'directives/daytimeTemp.html',
    replace: true,
    scope: {
      forecastListItem: "=",
      convertDateFunction: "&",
      convertTempFunction: "&"
    }
  }
});
