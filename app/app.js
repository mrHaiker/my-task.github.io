'use strict';

// Declare app level module which depends on views, and components
angular.module('Quiz', [
  'ngRoute',
  'ui.router',
  'mainQuiz',
  'ngDragDrop',
  'angular-loading-bar'
]).
config(function($routeProvider, $sceDelegateProvider, cfpLoadingBarProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  cfpLoadingBarProvider.includeSpinner = false;

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    '//*.jservice.io/**'
  ]);
});
