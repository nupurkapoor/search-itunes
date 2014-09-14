Searching iTunes and Last.fm by artist implemented in Angular JS.

The app is a simple iTunes API search by artist integration with Last.fm's API. 

It etches the search result on search form submission and gets listing from iTunes API, then invokes Last.fm's API based on the first returned artist-name*, and gets related content, upcoming event for artist limited to 3 and similar artist list limited to 3, from Last.fm. 

It uses HTML5 markers for inline preview audio player.

* Last.fm's api returns valid results only for a well-formatted full artist's name, since its not a good practice to rely on user's input, I am triggering Last.fm's API request by fetching the first artist's name from the returned iTunes' listing. 