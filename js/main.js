var app = angular.module('nkApp', ["ui.utils", "ui.router"]);

app.factory('iTunesListing', function($http) {
   return {
        doSearch: function(queryString) {
             //return the promise directly.
             return $http.jsonp('http://itunes.apple.com/search', {
                    params: {
                        "callback": "JSON_CALLBACK",
                        "term": queryString
                    }
                });
        }
   }
});

app.controller('iTunesSearch', function($scope, $location, $routeParams, iTunesListing) {
    $scope.search = function() {
      iTunesListing.doSearch($scope.searchTerm)
        .then(function(result) {
              $scope.data = result.data;
              $location.path($scope.searchTerm);
          });
    }
    $scope.searchTerm = $location.$$path.split("/")[1];
    if($scope.searchTerm!="") {
      $scope.search();
    }
    $scope.clear = function () {
        $scope.searchTerm = "";
    };
});