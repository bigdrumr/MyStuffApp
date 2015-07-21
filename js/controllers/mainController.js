
// Main Controller Module
//
app.controller('mainCtrl', [
	'$scope', 
	'$http',
	function($scope, $http) {
		$scope.title = 'My Stuff';
		$http.get('data/main.json').success(function(data) {
			$scope.main = data;
		})
	}]);


// Instrument List View Controller
//
// This controller is assigned to template 'list-instruments.html'
// The assignment is a route defined in app.js. 
// mainController.controller('instmtData', [
// 	'$scope', 
// 	'$http',
// 	function($scope, $http) {
// 		$scope.title = 'Instruments';
// 		// fetch data from the server
// 		$http.get('data/instruments.json').success(function(data){
// 			$scope.instruments = data;
// 		});
// 		// init list ordering by 'name' property
// 		$scope.listOrder = 'name';
// 	}
// ]);
