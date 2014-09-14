/*
  'iTunesSearchController'
  Listens for promise to build data set in scope, also sets first artist name

*/

app.controller('iTunesSearchController', function($scope, $location, $routeParams, iTunesListingService) {
    
    $scope.search = function(searchTerm) {
      if (searchTerm) {
        iTunesListingService.doSearch(searchTerm)
        .then(function(result) {
              $scope.data = result.data;
              $location.path($scope.searchTerm);
              iTunesListingService.setFirstArtist($scope.data.results[0].artistName);
          });
      };

    }
    $scope.searchTerm = $location.$$path.split("/")[1];
    if($scope.searchTerm != "") {
      $scope.search($scope.searchTerm);
    }
});