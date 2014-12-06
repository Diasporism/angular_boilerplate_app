'use strict';

/**
 * @ngdoc function
 * @name mentorFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mentorFrontendApp
 */
angular.module('mentorFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
