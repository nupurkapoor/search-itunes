/*
  'iTunesListingService'
  - Implements main search for artist in iTunes library
  - Provides observer method for artists. Used to get the first artist from listing.
  - glue between fmSearchController and iTunesSearchController  
*/

app.factory('iTunesListingService', function($http) {
    var firstArtist;
    var switchArtist;

    /* Observer pattern implementation inspired by stackoverflow - #12576798*/
    var observerCallback = [];

    /* call this when you are sure of changes*/
    var notifyObserver = function() {
        angular.forEach(observerCallback, function(callback){
            callback();
        })
    }
    
    return {
        doSearch: function(queryString) {
            //return the promise directly of listing filtered by artist as search query.
            return $http.jsonp('http://itunes.apple.com/search', {
                params: {
                    "callback": "JSON_CALLBACK",
                    "media": "music",
                    "entity": "song",
                    "attribute":"artistTerm",
                    "limit": 10,
                    "term": queryString
                }
            });
        },
        getFirstArtist: function() {
            return firstArtist;
        },
        setFirstArtist: function(artist) {
            firstArtist = artist;
            notifyObserver();
        },
        /* register an observer */
        registerObserverCallback: function(callback) {
            observerCallback.push(callback);
        }
   }

});