'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the yeomanTutorialApp
 */
angular.module('yeomanTutorialApp')
  .controller('TasksCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
