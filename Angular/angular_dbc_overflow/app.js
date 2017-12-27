var app = angular.module('dbcOverflow', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/questions");

  $stateProvider
  .state('users',{
    url: "/users",
    templateUrl: "partials/users.html",
    controller: "userCtrl"
  })
  .state('questions',{
    url: "/questions",
    templateUrl: "partials/questions.html",
    controller: "questionCtrl"
  })
  .state('questions.answers',{
    url: "/answers/:id",
    templateUrl:"partials/answers.html",
    controller: "answerCtrl"
  });

})

app.controller('userCtrl', ['$scope', '$firebase', 'Data', 'Key', function($scope, $firebase, Data, Key){

  // var ref = new Firebase("https://dbc-overflow.firebaseio.com/")

  Data.sc.$bindTo($scope, "data").then(function(){
    console.log($scope.data.users)
    if (!$scope.data.hasOwnProperty("users"))
      $scope.data.users = {};
      $scope.getAuth();
  })

  // $scope.authDataCallback = function(authData) {
  //   if (authData) {
  //     $scope.loggedUser = $scope.data.users[authData.uid]
  //     console.log($scope.loggedUser);
  //   } else {
  //     $scope.loggedUser = false
  //     console.log("User is logged out");
  //   }
  // }

  $scope.getAuth = function(){
    authUser = Data.rf.getAuth();
    if (authUser) $scope.loggedUser = $scope.data.users[authUser.uid]
  }

  $scope.loggedUser = false;

  $scope.addUser = function(new_user) {
    Data.rf.createUser(
    {
    email    : new_user.email,
    password : new_user.password
    },
    function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        $scope.updateDatabase(new_user, userData.uid)
      }
    });
  }

  $scope.updateDatabase = function(new_user, uid) {
    console.log($scope.data.users)
    $scope.data.users[uid] = new_user
    console.log($scope.data.users)
    $scope.authUser(new_user)
    $scope.newUser = {};
  }

  $scope.authUser = function(user) {
    Data.rf.authWithPassword({
    email    : user.email,
    password : user.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $scope.loggedUser = user;
      }
    });
  }

  $scope.logOut = function() {
    Data.rf.unauth();
    $scope.loggedUser = false;
  }

}]);


app.controller('questionCtrl', ['$scope', '$q', 'Data', 'Key', function($scope, $q, Data, Key){

  $scope.sync = Data.sc.$bindTo($scope, "data").then(function(){
    if (!$scope.data.hasOwnProperty("questions"))
      $scope.data.questions = {};
  })

  $scope.update = function(new_question) {
    new_question.score = 0;
    $scope.data.questions[Key()] = new_question;
    $scope.new_question = {};
  };

  $scope.plusScore = function(item) {
    item.score++
  }

  $scope.minusScore = function(item) {
    item.score--
  }

}]);

app.controller('answerCtrl', ['$scope', '$stateParams', 'Key', function($scope, $stateParams, Key){

  $scope.q = $stateParams.id; var q = $scope.q;

  $scope.sync.then(function(){
    if (!$scope.data.questions[q].hasOwnProperty("answers"))
      $scope.data.questions[q].answers = {}
  })

  $scope.answer = function(new_answer){
    new_answer.score = 0;
    $scope.data.questions[q].answers[Key()] = new_answer;
    $scope.new_answer = {};
  }

  $scope.plusScore = function(item) {
    item.score++
  }

  $scope.minusScore = function(item) {
    item.score--
  }

}]);

app.factory('Data', function($firebase){
  var ref =  new Firebase("https://dbc-overflow.firebaseio.com/");
  var sync = $firebase(ref);
  var syncObject = sync.$asObject();
  return { sc: syncObject, rf: ref }
});

app.factory('Key', function(){
  var randomKey = function() {
    return Math.random().toString(36).substr(2, 15);
  }
  return randomKey
})

//how do I organize data?
//answer inside questions
//need a link that links to me the state of the question