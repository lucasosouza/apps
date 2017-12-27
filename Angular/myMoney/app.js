app = angular.module('myMoney', ['ui.router', 'ngResource']);

app.controller('FutureExpensesCtrl', function(){

})

app.controller('MortgageCtrl', function(){

})

app.controller('BudgetCtrl', function(){

})

app.controller('DashboardCtrl', function(){

})

app.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
	.state('index', {
		url: '/',
		views: {
			'fixed-expenses': {
				templateUrl: 'fixedExpenses/fixedExpenses.html',
				controller: 'FixedExpensesCtrl',
				controllerAs: 'fixed'
			},
			'future-expenses': {
				templateUrl: 'futureExpenses/futureExpenses.html',
				controller: 'FutureExpensesCtrl'
			},
			'mortgage': {
				templateUrl: 'mortgage/mortgage.html',
				controller: 'MortgageCtrl'
			},
			'budget': {
				templateUrl: 'budget/budget.html',
				controller: 'BudgetCtrl'
			},
			'dashboard': {
				templateUrl: 'dashboard/dashboard.html',
				controller: 'DashboardCtrl'
			}
		}
	})

});




