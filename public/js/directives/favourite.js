angular.module('favouriteDirective', [])
.directive('favourite', function() {
	return {
		restrict: 'E',
		templateUrl: './templates/favourite.html',
		scope: {
			id: '@'
		},
		controller: ['$scope', function($scope) {
			$scope.toggleFavourite = function(event) {
				console.log("Hello");
			};
		}]
	};
});