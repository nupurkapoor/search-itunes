app.controller('iTunesSearch', function($scope, $location, $routeParams, iTunesListing) {
    
    $scope.search = function(searchTerm) {
      if (searchTerm) {
        iTunesListing.doSearch(searchTerm)
        .then(function(result) {
              $scope.data = result.data;
              $location.path($scope.searchTerm);
              iTunesListing.setFirstArtist($scope.data.results[0].artistName);
          });
      };

    }
    $scope.searchTerm = $location.$$path.split("/")[1];
    if($scope.searchTerm != "") {
      $scope.search($scope.searchTerm);
    }

    // $scope.clear = function () {
    //     $scope.searchTerm = "";
    // };

    // var updateSearch = function() {}


});