app.directive('myInstruments', function(){
	return {
		restrict: 'E',
		scope: {
			detail: '='
		},
		templateUrl: 'templates/partials/myInstruments.html'
	};
});