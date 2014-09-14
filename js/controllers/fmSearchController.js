/*
  'fmSearchController'
  Responsible to get related content as per the first artist in itunes' listing
  from Last.fm
*/

app.controller('fmSearchController' , ['$scope', 'fmListingService' , 'iTunesListingService'
  , function ($scope, fmListingService, iTunesListingService) {

  var updateList = function() {
    var artistName = iTunesListingService.getFirstArtist();

    fmListingService.getSimilarArtists(artistName)
      .success(function(data, status){
        $scope.artists = data.similarartists.artist;
      });

    fmListingService.getUpcomingEvents(artistName)
      .success(function(data, status){
        $scope.events = data.events.event;
      });
  }

  iTunesListingService.registerObserverCallback(updateList);

  
  $scope.searchArtist = function(name) {
    console.log(name);
  }

}]);