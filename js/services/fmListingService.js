/*
  'fmListingService'
  Service as glue between data and fmSearchController. Returns related content's listing
*/

app.factory('fmListingService', function($http) {

  var similarMethod = "artist.getsimilar";
  var upcomingEvents = "artist.getevents";

//returns the promise directly
  return {
      getSimilarArtists: function(queryString) {
  //listing filtered by artist as search query limited to 6.
           return $http.jsonp(fmBaseURL, {
                  params: {
                    "api_key": apiKey,
                    "format": "JSON",
                    "callback": "JSON_CALLBACK",
                    "method": similarMethod,
                    "autocorrect": 1,
                    "limit": 6,
                    "artist": queryString
                  }
              });
      },

      getUpcomingEvents: function(queryString) {
        return $http.jsonp(fmBaseURL, {
                  params: {
                    "api_key": apiKey,
                    "format": "JSON",
                    "callback": "JSON_CALLBACK",
                    "method": upcomingEvents,
                    "autocorrect": 1,
                    "limit": 3,
                    "artist": queryString
                  }
              });
      }
  }
});
