
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
			// fetch this template when URL points to list
			.when('/instruments', {
				controller: 'categoryData',
				templateUrl: 'templates/list-Instrument.html'
			})
			.when('/everyday', {
				controller: 'categoryData',
				templateUrl: 'templates/list-Everyday.html'
			})
			.when('/composition', {
				controller: 'categoryData',
				templateUrl: 'templates/list-Composition.html'
			})
			// fetch this template when URL points to a detail page
			// .when('/everyday/:everydayId', {
			// 	controller: 'instmtDetail',
			// 	templateUrl: 'templates/detail-everyday.html'
			// })
			// .when('/composition/:compositionId', {
			// 	controller: 'instmtDetail',
			// 	templateUrl: 'templates/detail-composition.html'
			// })
			// otherwise, point to root '/'
			.otherwise({
				redirectTo: '/'
			});
	}
]);