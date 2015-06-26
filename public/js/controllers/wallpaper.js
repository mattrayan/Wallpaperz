angular.module('wallpaper', [])
.controller('wallpaperCtrl', ['$scope', '$location', '$window', 'favouritesAPI', 'wallgigAPI', function($scope, $location, $window, favouritesAPI, wallgigAPI) {
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

	$scope.openImage = function() {
		$window.open($scope.image.wallpaper.image.original.url);
	};
}]);