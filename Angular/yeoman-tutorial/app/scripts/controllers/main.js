'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTutorialApp
 */

angular.module('yeomanTutorialApp')

  .controller('MainCtrl', function ($scope, $db) {

    var model = 'expenses'
  	function refresh() { 
  		$db.query(model, $scope, 'byName');
  		$db.all(model, $scope) 
  	};

  	refresh();

  	$scope.new = {};
  	$scope.add = function(){
  		$db.add(model, $scope.new, refresh);
  		$scope.new = {};
  	}

  	$db.query(model, $scope, 'byName', 'treta', 'selectedExpense');

  });
