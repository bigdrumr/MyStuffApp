
// Main Controller Module
//
app.controller('compositionCtrl', [
	'$scope', 
	'$http',
	function($scope, $http) {
		$scope.title = 'My composition';
		$http.get('data/composition/composition.json').success(function(data) {
			$scope.list = data;
		});
	}
]);

