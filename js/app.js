
// 'ngRoute' defines an app dependency: prepare to route templates.
var app = angular.module('MyStuffApp', ['ngRoute', 'MainController']);

//'$routeProvider' defines the template routes.
// '/' is the root URL, i.e. index.html. Default. 
app.config([
	'$routeProvider', 
	function($routeProvider) {
		$routeProvider.
			when('/', {
				controller: 'MainController',
				templateUrl: 'templates/home.html'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);