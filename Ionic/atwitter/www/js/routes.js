
app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/tab");

  $stateProvider
  .state('tab', {
    url: "/tab",
    templateUrl: "templates/tab.html"
  })
  .state('tab.following', {
    url: "/following",
    templateUrl: "templates/feed.html",
    controller: "FeedCtrl",
    resolve: {
      videos: function(Videos) { return Videos.byCategory('following') }
    }
  })
  .state('tab.liked', {
    url: "/liked",
    templateUrl: "templates/feed.html",
    controller: "FeedCtrl",
    resolve: {
      videos: function(Videos) { return Videos.byCategory('liked') }
    }

  })
  .state('tab.popular', {
    url: "/popular",
    templateUrl: "templates/feed.html",
    controller: "FeedCtrl",
    resolve: {
      videos: function(Videos) { return Videos.byCategory('popular') }
    }
  })

})


// STATES
// Tabs
//   Following, Popular and Liked will share the same template and the same controller
//   But a different route
//   And a different resolve
//   resolve is gonna filter only the videos pertaining to the category selected
//     click on any tweet will popup modal, where video will start to play
//     all comments should show below the video
//     new modal will have options : like and comment;
// Settings
// LogIn/Logout
// Followers
// Tweet

