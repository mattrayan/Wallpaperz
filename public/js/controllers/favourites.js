angular.module('favourites', [])
.controller('favouritesCtrl', ['$scope', 'favouritesAPI', function($scope, favouritesAPI) {
	if (favouritesAPI.favourites.length === 0) {
		favouritesAPI.getFavourites();
	}
}]);