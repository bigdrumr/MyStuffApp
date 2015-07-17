
var mainController = angular.module('MainController', []);

mainController.controller('instmtDataCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.title = 'Instruments';
		$http.get('data/instruments.json').success(function(data){
			// return all data from the JSON file, and spit out only the first two objects.
			$scope.instruments = data;
		});
		$scope.listOrder = 'name';
	}
]);
// mainController.controller('instmtDetailCtrl', ['$scope', '$routeParams', 
// 	function($scope, $routeParams) {
// 		$scope.instrumentId = $routeParams.instrumentId;
// 	}
// ]);