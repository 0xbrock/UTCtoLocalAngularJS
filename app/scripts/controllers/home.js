'use strict';

/**
 * @ngdoc function
 * @name utctoLocalAngularJsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the utctoLocalAngularJsApp
 */
angular.module('utctoLocalAngularJsApp')
  .controller('HomeCtrl', function () {
    this.times = [
      '6/25/2015 7:05:08 PM UTC',
      '6/1/2015 12:11:32 AM UTC',
      '7/4/2015 5:25:38 PM UTC',
      '7/23/2015 7:34:20 PM UTC'
    ];
  });
