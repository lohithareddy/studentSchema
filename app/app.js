'use strict';
// Declare app level module which depends on views, and components

angular.module('myApp', ['ngRoute','firebase','myApp.std']).
config([ '$routeProvider', function($locationProvider, $routeProvider) {
   $routeProvider.otherwise({redirectTo: '/std'});
}]);
