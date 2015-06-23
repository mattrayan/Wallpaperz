angular.module('gallery', [])
.controller('galleryCtrl', ['$scope', 'wallgigAPI', function($scope, wallgigAPI) {
	$scope.wallpapers = wallgigAPI.wallpapers;

	if ($scope.wallpapers.length === 0) {
		wallgigAPI.fetchWallpapers();
	}

	var getActiveThumb = function(event) {
		var activeThumb = event.target;

		if (activeThumb.parentElement.classList[0] === "thumbnail-image") {
			activeThumb = activeThumb.parentElement;
		} else if (activeThumb.parentElement.parentElement.classList[0] === "thumbnail-image") {
			activeThumb = activeThumb.parentElement.parentElement;
		}

		return activeThumb;
	};

	$scope.addActiveControls = function(event) {
		var activeThumb = getActiveThumb(event);
		angular.element(activeThumb).addClass('activeItem');
		angular.element(activeThumb.children[0]).addClass('activeStar');
	};

	$scope.removeActiveControls = function(event) {
		var activeThumb = getActiveThumb(event);
		angular.element(activeThumb).removeClass('activeItem');
		angular.element(activeThumb.children[0]).removeClass('activeStar');
	};
}]);