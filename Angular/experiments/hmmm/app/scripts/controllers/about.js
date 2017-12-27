'use strict';

/**
 * @ngdoc function
 * @name hmmmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hmmmApp
 */
angular.module('hmmmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
