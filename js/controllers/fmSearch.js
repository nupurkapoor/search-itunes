app.controller('fmSearch' , ['$scope', 'fmListing' , 'iTunesListing'
  , function ($scope, fmListing, iTunesListing) {

  var updateList = function() {
    var artistName = iTunesListing.getFirstArtist();

    fmListing.getSimilarArtists(artistName)
      .success(function(data, status){
        $scope.artists = data.similarartists.artist;
      });

    fmListing.getUpcomingEvents(artistName)
      .success(function(data, status){
        $scope.events = data.events.event;
      });
  }

  iTunesListing.registerObserverCallback(updateList);
}]);