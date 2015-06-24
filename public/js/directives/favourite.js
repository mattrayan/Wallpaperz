angular.module('favouriteDirective', [])
.directive('favourite', function() {
	return {
		restrict: 'E',
		templateUrl: './templates/favourite.html',
		scope: {
			id: '@'
		},
		controller: ['$scope', 'favouritesAPI', function($scope, favouritesAPI) {
			$scope.inFavourites = false;
			if (favouritesAPI.findWallpaper($scope.id).length !== 0) {
				$scope.inFavourites = true;
			}
		}]
	};
});