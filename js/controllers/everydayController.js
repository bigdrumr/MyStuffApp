
// Main Controller Module
//
app.controller('everydayCtrl', [
	'$scope', 
	'$http',
	function($scope, $http) {
		$scope.title = 'My Everyday Carry';
		$http.get('data/everyday/everyday.json').success(function(data) {
			$scope.list = data;
		});
	}
]);

