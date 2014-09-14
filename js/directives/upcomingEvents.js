/* 
  Naive mistake!! Should have spelled directivive in the name itself, could feel the pain through out the app. 
*/

app.directive('upcomingEvents', function() {
  return {
    restrict    : 'A', // attribute directive
    templateUrl : 'views/upcomingEvents.html'
  }
});