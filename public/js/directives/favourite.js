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

			$scope.checkInFavourites = function() {
				if (favouritesAPI.findWallpaper($scope.id).length !== 0) {
					$scope.inFavourites = true;
				}
			};

			if (favouritesAPI.favourites.length === 0) {
				favouritesAPI.getFavourites().then(function() {
					$scope.checkInFavourites();
				});
			} else {
				$scope.checkInFavourites();
			}
		}]
	};
});