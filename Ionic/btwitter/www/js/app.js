// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive


  .state('menu', {
    url: "/menu",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'MenuCtrl'
  })

  .state('menu.tab', {
    url: "/tab",
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: "templates/tabs.html",
        controller: 'TabCtrl'
      }
    }   
  })
  .state('menu.picture', {
    url: "/picture",
    views: {
      'menuContent': {
        templateUrl: "templates/picture.html",
        controller: "PictureCtrl"
      }
    }
  })
  .state('menu.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html",
        controller: 'SettingsCtrl'
      }
    }
  })
  .state('menu.friends', {
    url: "/friends",
    views: {
      'menuContent': {
        templateUrl: "templates/friends.html",
        controller: "FriendsCtrl"
      }
    }
  })

  // Each tab has its own nav history stack:

  .state('menu.tab.following', {
    url: "/following",
    views: {
      'tab-following': {
        templateUrl: "templates/feed.html",
        controller: "FeedCtrl"
      }
    },
    resolve: {
      pics: function(Pics) { return Pics.byCategory('following') },
      title: function() {return "Following"}
    }
  })
  .state('menu.tab.liked', {
    url: "/liked",
    views: {
      'tab-liked': {
        templateUrl: "templates/feed.html",
        controller: "FeedCtrl"
      }
    },
    resolve: {
      pics: function(Pics) { return Pics.byCategory('liked') },
      title: function() {return "Liked"}
    }
  })
  .state('menu.tab.popular', {
    url: "/popular",
    views: {
      'tab-popular': {
        templateUrl: "templates/feed.html",
        controller: "FeedCtrl"
      }
    },
    resolve: {
      pics: function(Pics) { return Pics.byCategory('popular') },
      title: function() {return "Popular"}
      }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/tab/popular');

});
