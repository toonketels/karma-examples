(function(window) {

	"use strict"
	
	var app = {};

	app.greet = function(name) {
		return "hello " + name;
	};

	window.APP = app;

})(this);