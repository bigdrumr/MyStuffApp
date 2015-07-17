app.controller('MainController', ['$scope', '$http',
	function($scope, $http) {


		$scope.title = 'Instruments';


		$http.get('data/instruments.json').success(function(data){
			// return all data from the JSON file, and spit out only the first two objects.
			$scope.instruments = data;
		});

		$scope.listOrder = 'name';




		// $scope.instruments = [

		// 	{
		// 		type: 'Guitar',
		// 		name: 'Larrivee',
		// 		location: 'Durham, NC',
		// 		condition: 'New',
		// 		age: 3,
		// 		image: 'img/'
		// 	},
		// 	{
		// 		type: 'Violin',
		// 		name: 'Fiddle',
		// 		location: 'Durham, NC',
		// 		condition: 'Antique',
		// 		age: 100,
		// 		image: 'img/'
		// 	},
		// 	{
		// 		type: 'Banjo',
		// 		name: 'Rogue',
		// 		location: 'Madison, WI',
		// 		condition: 'Second-hand',
		// 		age: 10,
		// 		image: 'img/'
		// 	},
		// 	{
		// 		type: 'Drum',
		// 		name: 'Big Snare Drum',
		// 		location: 'Durham, NC',
		// 		condition: 'Modified',
		// 		age: 10,
		// 		image: 'img/'
		// 	}
		// ];
	}
]);