angular.module('thumbnailsDirective', [])
.directive('thumbnails', function() {
	return {
		restrict: 'E',
		templateUrl: './templates/thumbnails.html',
		scope: {
			context: '@'
		},
		controller: ['$scope', 'favouritesAPI', 'wallgigAPI', function($scope, favouritesAPI, wallgigAPI) {
			if ($scope.context === "all") {
				$scope.wallpapers = wallgigAPI.wallpapers;
				wallgigAPI.fetchWallpapers();
			} else if ($scope.context === "search") {
				$scope.wallpapers = wallgigAPI.searchResults;
			} else if ($scope.context === "favourites") {
				$scope.wallpapers = favouritesAPI.favourites;
				favouritesAPI.getFavourites();
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

			var toggleFavourites = function(id, url) {
				favouritesAPI.toggleFavourite(id, url);
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
				if (event.target.classList[0] === "favourite") {
					toggleFavourites(event.target.parentElement.parentElement.attributes['data-id'].nodeValue, event.target.parentElement.parentElement.attributes['data-url'].nodeValue);
				} else if (event.target.classList[0] === "ng-isolate-scope") {
					$scope.$parent.$parent.go('/wallpaper/' + event.target.parentElement.attributes['data-id'].nodeValue);
				} else {
					$scope.$parent.$parent.go('/wallpaper/' + event.target.attributes['data-id'].nodeValue);
				}
			};
		}]
	};
});