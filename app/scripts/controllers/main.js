'use strict';

/**
 * @ngdoc function
 * @name mentorFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mentorFrontendApp
 */
angular.module('mentorFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
