
var app = angular.module('MyStuffApp', ['ui.router']);



app.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'templates/list-main.html',
			controller: 'mainCtrl'
		})
		.state('instruments', {
			url: '/instruments',
			templateUrl: 'templates/list.html',
			controller: 'instrumentsCtrl'
		})
		.state('everyday', {
			url: '/everyday',
			templateUrl: 'templates/list.html',
			controller: 'everydayCtrl'
		})
		.state('composition', {
			url: '/composition',
			templateUrl: 'templates/list.html',
			controller: 'compositionCtrl'
		});
});
