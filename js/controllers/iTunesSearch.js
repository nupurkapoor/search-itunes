app.controller('iTunesSearch', function($scope, $location, $routeParams, iTunesListing) {
    $scope.search = function() {
      iTunesListing.doSearch($scope.searchTerm)
        .then(function(result) {
              $scope.data = result.data;
              $location.path($scope.searchTerm);
              iTunesListing.setFirstArtist($scope.data.results[0].artistName);
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