app.controller('tabCtrl', ['$scope', '$state', function($scope, $state){

  // $scope.resetState = function(){
  //   setTimeout(function(){
  //     if ($state.is('tab.questions'))
  //       $state.go('^', {})
  //   },20);
  // }

}]);

app.controller('userCtrl', ['$scope', '$firebase', 'Data', 'Key', 'User', function($scope, $firebase, Data, Key, User){

  Data($scope, "users")

  $scope.loggedUser = User.loggedUser
  $scope.newUser = {};
  $scope.loginUser = {};
  $scope.errorMessage = false;

  $scope.addUser = function() {
    $scope.newUser.username = $scope.newUser.email.replace(/@.*/, '')
    $scope.users[Key()] = $scope.newUser
    User.loggedUser = $scope.newUser
    $scope.loggedUser = User.loggedUser;
    $scope.errorMessage = false;
  }

  $scope.logIn = function() {
    console.log($scope.users)
    for (obj in $scope.users) {
      if (obj !== '$id' && obj !== '$priority' && obj !== '$value') {
        var user = $scope.users[obj];
        console.log("remote", user)
        console.log("form", $scope.loginUser)
        if ((user.username === $scope.loginUser.email || user.email === $scope.loginUser.email)  && user.password === $scope.loginUser.password) {
          $scope.errorMessage = false;
          User.loggedUser = user;
          $scope.loggedUser = User.loggedUser;
          $scope.loginUser = {};
        } else {
        console.log("error")
        $scope.loginUser = {};
        $scope.errorMessage = "Invalid login or password";
        }
      }
  }
}

  $scope.logOut = function() {
    User.loggedUser = false;
    $scope.loggedUser = User.loggedUser;
  }

}]);

app.controller('questionCtrl', ['$scope', 'Data', 'Key', 'User', 'Question', function($scope, Data, Key, User, Question){

  $scope.newQuestion = {}
  Data($scope, "questions")

  $scope.update = function() {
    if (User.loggedUser) {
      $scope.newQuestion.username = User.loggedUser.username;
    } else {
      $scope.newQuestion.username = "Anonymous";
    }
    $scope.newQuestion.score = 0;
    $scope.questions[Key()] = $scope.newQuestion;
    $scope.newQuestion = {};
  };

  $scope.activateQuestion = function(question) {
    Question.activeQuestion = question;
  }

  $scope.plusScore = function(item){item.score++}

  $scope.minusScore = function(item){item.score--}

  $scope.activeForm = false;

  $scope.activateFormButtonText = "New question"

  $scope.activateForm = function() {
    $scope.activeForm = !$scope.activeForm
    if ($scope.activeForm)
      $scope.activateFormButtonText = "Hide form"
    else
      $scope.activateFormButtonText = "New question"
  };

}]);

app.controller('answerCtrl', ['$scope', '$stateParams', 'Data', 'Key', 'Question', 'User', function($scope, $stateParams, Data, Key, Question, User){

  Data($scope, "answers", "questions", $stateParams.id);

  $scope.question = Question.activeQuestion;

  $scope.newAnswer = {};

  $scope.answer = function(){
    if (User.loggedUser) {
      $scope.newAnswer.username = User.loggedUser.username;
    } else {
      $scope.newAnswer.username = "Anonymous";
    }
    $scope.answers[Key()] = $scope.newAnswer;
    $scope.newAnswer = {};
  }

}]);