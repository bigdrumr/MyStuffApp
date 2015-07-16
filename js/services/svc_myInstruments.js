
app.factory('instrumentDetail', ['$http',function($http) {
		return $http.get('data/instruments.json')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
	}
]);