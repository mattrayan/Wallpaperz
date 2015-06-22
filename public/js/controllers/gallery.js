angular.module('gallery', [])
.controller('galleryCtrl', ['$scope', 'wallgigAPI', function($scope, wallgigAPI) {
	$scope.wallpapers = wallgigAPI.wallpapers;

	if ($scope.wallpapers.length === 0) {
		wallgigAPI.fetchWallpapers();
	}
}]);