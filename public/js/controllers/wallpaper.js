angular.module('wallpaper', [])
.controller('wallpaperCtrl', ['$scope', '$location', 'wallgigAPI', function($scope, $location, wallgigAPI) {
	var id = $location.path().split("/")[2];
	$scope.image = {};

	wallgigAPI.getWallpaper(id).then(function(data) {
		$scope.image = data;
	});
}]);