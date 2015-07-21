
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

