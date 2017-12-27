angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft();
  }
})

.controller('SettingsCtrl', function($scope){
  $scope.title = 'Settings'
})

.controller('PictureCtrl', function($scope){
  $scope.title = 'Picture'
})

.controller('FriendsCtrl', function($scope) {
  $scope.title = 'Friends';
})

.controller('TabCtrl', function(){})

.controller('FeedCtrl', function($scope, $state, pics, title, Pics){
  $scope.title = title;
  $scope.pics = pics;
  // setInterval(function(){
  //   console.log($state.current)
  //   console.log($scope.newComment)
  // }, 1000)

  $scope.showAddComment = false;

  //$scope.newComment = "";

  $scope.switchAddComment = function(){
    $scope.showAddComment = !$scope.showAddComment;
    $scope.newComment = "";
  }

  $scope.runs = function(){
    console.log("here")
  }

  $scope.like = function(pic) {
    pic.likes++;
  }

  $scope.dislike = function(pic) {
    pic.dislikes++;
  }

  $scope.addComment = function(pic, comment) {
    pic.comments.push(comment);
  }

})


