(function(window, angular) {

	"use strict"
	
	var app = angular.module("APP", []);

	app.controller("mainCtrl", ['$scope', function($scope) {
		$scope.greet = function(name) {
			return "hello " + name;
		};
	}]);

	window.APP = app;

})(this, angular);