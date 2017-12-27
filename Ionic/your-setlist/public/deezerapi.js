//deezerapi.js

(function(){

  var secretKey = '60e6f7a859e32b2a244f6e7aa086bd6e'
  var applicationId = '152701'
  var applicationName = 'your-setlist'
  var applicationDomain = 'https://incandescent-inferno-3112.firebaseapp.com/'

  DZ.init({
    appId  : '152701',
    channelUrl : 'https://incandescent-inferno-3112.firebaseapp.com/',
    player: {
          onload: function () {}
          }
  });

  //



  // post /favorites
  // send session id and song id
  // saves song to the favorites list

  // delete /favorites
  // send session id and song id
  // deletes song from the favorites list

  // get /favorites
  // send session id as a parameter
  // return list with all favorites

  // get /recommendations
  // get list of 10 random songs


})();



