'use strict';

/**
 * @ngdoc overview
 * @name utctoLocalAngularJsApp
 * @description
 * # utctoLocalAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('utctoLocalAngularJsApp', [
    'ngAnimate',
    'ngRoute',
    'intPonfilters'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'viewModel'
      })
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .otherwise({
        redirectTo: '/'
      });
  }]);
