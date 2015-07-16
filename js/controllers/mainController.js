app.controller(
	'MainController', 
	['$scope', function($scope) {


		$scope.title = 'Instruments';

		// service: js/services/svc_myInstruments.js
		// 
		// instrumentDetail.success(function(data) {
		// 	$scope.instruments = data;
		// });

		$scope.instruments = [

			{
				type: 'Guitar',
				name: 'Larrivee',
				location: 'Durham, NC',
				condition: 'New',
				age: 3,
				image: 'img/'
			},
			{
				type: 'Violin',
				name: 'Fiddle',
				location: 'Durham, NC',
				condition: 'Antique',
				age: 100,
				image: 'img/'
			},
			{
				type: 'Banjo',
				name: 'Rogue',
				location: 'Madison, WI',
				condition: 'Second-hand',
				age: 10,
				image: 'img/'
			},
			{
				type: 'Drum',
				name: 'Big Snare Drum',
				location: 'Durham, NC',
				condition: 'Modified',
				age: 10,
				image: 'img/'
			}
		];
	}
]);