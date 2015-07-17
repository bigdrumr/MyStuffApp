
'use strict';

// 'ngRoute' defines an app dependency: prepare to route templates.
var app = angular.module('MyStuffApp', [
	'ngRoute',
	'MainController'
	]);

//'$routeProvider' defines the template routes.
// '/' is the root URL, i.e. index.html. Default. 
app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider
			// fetch this template when URL is root '/'
			.when('/', {
				// assign the controller to the template
				controller: 'mainData',
				templateUrl: 'templates/list-main.html'
				// templateUrl: 'templates/list-instrument.html'
			})
			// fetch this template when URL points to detail page
			.when('/instruments/:instrumentId', {
				controller: 'instmtDetail',
				templateUrl: 'templates/detail-instrument.html'
			})
			// otherwise, point to root '/'
			.otherwise({
				redirectTo: '/'
			});
	}
]);