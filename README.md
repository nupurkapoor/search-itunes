This app is a simple <a href="http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html" target="_blank">iTunes</a> API search by artist integration with <a href="http://www.last.fm.com">Last.fm</a>'s API implemented in <a href="http://angularjs.org/" target="_blank">Angular JS</a>

It fetches the search result on search query submission, and gets listing from iTunes API, then invokes Last.fm's API based on the first returned artist-name*, and gets related content, upcoming event for artist limited to 3 and similar artist list limited to 3, from Last.fm.

Uses HTML5 markers for inline preview audio player.

------ Why did I decide to search related content by first artist and not the query term ------

<b>Last.fm</b>'s api returns valid results only for a well-formatted full artist's name, since its not a good practice to rely on user's input, I am triggering Last.fm's API request by fetching the first artist's name from the returned iTunes' listing. 