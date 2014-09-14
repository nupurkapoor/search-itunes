/* 
  Naive mistake!! Should have spelled directivive in the name itself, could feel the pain through out the app. 
*/

app.directive('similarArtist', function() {
  return {
    restrict    : 'A', // attribute directive
    templateUrl : 'views/similarArtist.html'
  }
});
