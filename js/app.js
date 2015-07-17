
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
			.when('/instruments', {
				controller: 'instmtDataCtrl',
				templateUrl: '/templates/list-instrument.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);