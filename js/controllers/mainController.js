
// Main Controller Module
//
var mainController = angular.module('MainController', []);

// Main List View Controller
//
// This controller is assigned to template 'list-instruments.html'
// The assignment is a route defined in app.js. 
mainController.controller('mainData', [
	'$scope', 
	'$http',
	function($scope, $http) {
		$scope.title = 'My Stuff';
		// fetch data from the server
		$http.get('data/main.json').success(function(data){
			$scope.main = data;
		});
		// init list ordering by 'name' property
		$scope.listOrder = 'name';
	}
]);

// Instrument List View Controller
//
// This controller is assigned to template 'list-instruments.html'
// The assignment is a route defined in app.js. 
mainController.controller('instmtData', [
	'$scope', 
	'$http',
	function($scope, $http) {
		$scope.title = 'Instruments';
		// fetch data from the server
		$http.get('data/instruments/instruments.json').success(function(data){
			$scope.instruments = data;
		});
		// init list ordering by 'name' property
		$scope.listOrder = 'name';
	}
]);

// Instrument Detail View Controller
//
mainController.controller('instmtDetail', [
	'$scope', 
	'$routeParams', 
	'$http', 
	function($scope, $routeParams, $http) {
		$scope.instrumentId = $routeParams.instrumentId;

		// fetch data from the server
		$http.get('data/instruments/' + $routeParams.instrumentId + '.json').success(function(data){
			$scope.instruments = data;
		});
	}
]);


// Everyday-carry List View Controller
//
// This controller is assigned to template 'list-instruments.html'
// The assignment is a route defined in app.js. 
mainController.controller('everydayData', [
	'$scope', 
	'$http',
	function($scope, $http) {
		$scope.title = 'Everyday-Carry';
		// fetch data from the server
		$http.get('data/everyday/everyday.json').success(function(data){
			$scope.everyday = data;
		});
		// init list ordering by 'name' property
		$scope.listOrder = 'name';
	}
]);
