app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/tab");

  $stateProvider
  .state('tab', {
    url: '/tab',
    templateUrl: "templates/tabs.html",
    controller: "tabCtrl"
  })
  .state('tab.facts', {
    url: '/facts',
    views: {
      'tab-facts': {
        templateUrl: "templates/facts.html",
        controller: "factCtrl"
      }
    }
  })
  .state('tab.users',{
    url: "/users",
    views: {
      'tab-users': {
        templateUrl: "templates/users.html",
        controller: "userCtrl"
      }
    }
  })
  .state('tab.questions',{
    url: "/questions",
    views: {
      'tab-questions': {
        templateUrl: "templates/questions.html",
        controller: "questionCtrl"
      }
    }
  })
  .state('tab.answers',{
    url: "/answers/:id",
    views: {
      'tab-answers': {
        templateUrl:"templates/answers.html",
        controller: "answerCtrl"
      }
    }

  });

})