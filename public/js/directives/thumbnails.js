angular.module('thumbnailsDirective', [])
.directive('thumbnails', function() {
	return {
		restrict: 'E',
		templateUrl: './templates/thumbnails.html',
		scope: {
			context: '@'
		},
		controller: ['$scope', 'wallgigAPI', function($scope, wallgigAPI) {
			if ($scope.context === "all") {
				$scope.wallpapers = wallgigAPI.wallpapers;
				wallgigAPI.fetchWallpapers();
			} else if ($scope.context === "search") {
				$scope.wallpapers = wallgigAPI.searchResults;
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

			$scope.clickWallpaper = function(event) {
				console.log(event);
				if (event.target.classList[0] === "favourite") {
					console.log(event.target.parentElement.parentElement.attributes['data-id'].nodeValue);
				} else if (event.target.classList[0] === "ng-isolate-scope") {
					$scope.$parent.$parent.go('/wallpaper/' + event.target.parentElement.attributes['data-id'].nodeValue);
				} else {
					$scope.$parent.$parent.go('/wallpaper/' + event.target.attributes['data-id'].nodeValue);
				}
			};
		}]
	};
});