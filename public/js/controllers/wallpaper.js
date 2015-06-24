angular.module('wallpaper', [])
.controller('wallpaperCtrl', ['$scope', '$location', 'favouritesAPI', 'wallgigAPI', function($scope, $location, favouritesAPI, wallgigAPI) {
	$scope.id = $location.path().split("/")[2];
	var thumbnail;
	$scope.image = {};

	wallgigAPI.getWallpaper($scope.id).then(function(data) {
		$scope.image = data;
		thumbnail = data.wallpaper.image.thumbnail.url;
	});

	$scope.toggleFavourites = function() {
		favouritesAPI.toggleFavourite($scope.id, thumbnail);
	};
}]);