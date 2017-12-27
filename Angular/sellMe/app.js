var app = angular.module('sellMe', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {

	//$urlRouterProvider.otherwise("/")

	$stateProvider
		.state('buyState', {
			url: '/buy',
			templateUrl: "buy.html",
			controller: 'ListCtrl'
		})
		.state('sellState', {
			url: '/sell',
			templateUrl: "sell.html",
			controller: 'ListCtrl'
		})

})

app.controller('ListCtrl', function($scope, Items){

	$scope.message = "welcome";
	$scope.loggedUser = false;
	$scope.items = Items.all();

	$scope.newItem = {};
	$scope.add = function(item){
		Items.add(item);
	};

	$scope.remove = function(item){
		Items.remove(item);
	}

	setTimeout(function(){
		console.log($scope.items)},4000)	

})

app.factory('Items', function($rootScope){

	var items = [
		{
			name: "shirt",
			color: "black",
			price: 20
		},
		{
			name: "jacket",
			color: "brow",
			price: 10
		}
		]

	setTimeout(function(){
		$rootScope.$apply(items.push({
			name: 'skirt',
			color: 'red',
			price: 15
		}))
	},3000)	

	return {
		all: function(){
			return items;
		},
		add: function(newItem){
			items.push(newItem);
		},
		remove: function(item){
			items.splice(items.indexOf(item), 1)
		}
	}

})

