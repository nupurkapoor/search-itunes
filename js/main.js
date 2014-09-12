var app = angular.module('nkApp', ["ui.utils", "ui.router"]);

app.factory('iTunesData', function($http) {
   return {
        doSearch: function(sQuery) {
             //return the promise directly.
             return $http.jsonp('http://itunes.apple.com/search', {
                    params: {
                        "callback": "JSON_CALLBACK",
                        "term": sQuery
                    }
                });
        }
   }
});

app.controller('iTunesSearch', function($scope, $location, $routeParams, iTunesData) {
    $scope.search = function() {
      iTunesData.doSearch($scope.searchTerm)
        .then(function(result) {
              $scope.data = result.data;
              $location.path($scope.searchTerm);
          });
    }
    $scope.searchTerm = $location.$$path.split("/")[1];
    if($scope.searchTerm!="") {
      $scope.search();
    }
});