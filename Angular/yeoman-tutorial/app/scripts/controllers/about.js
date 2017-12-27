'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTutorialApp
 */
angular.module('yeomanTutorialApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
