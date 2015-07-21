
// Main Controller Module
//
app.controller('instrumentsCtrl', [
	'$scope', 
	'$http',
	function($scope, $http) {
		$scope.title = 'My Instruments';
		$http.get('data/instruments/instruments.json').success(function(data) {
			$scope.list = data;
		});
	}
]);

