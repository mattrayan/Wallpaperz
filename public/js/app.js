angular.module('wallpaperz', ['ngRoute', 'favouritesService', 'wallgigService', 'favourites', 'wallpaper', 'favouriteDirective', 'headerDirective', 'thumbnailsDirective'])

.controller('wallpaperzCtrl', ['$scope', '$location', 'wallgigAPI', function($scope, $location, wallgigAPI) {
    $scope.searchForm = {};

    $scope.page = 1;

    $scope.go = function(path) {
        $location.path(path);
    };

    $scope.search = function() {
		wallgigAPI.searchWallpapers($scope.searchForm.query, true);
		$scope.page = 1;
		$scope.go('/search');
	};

}])

.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './templates/gallery.html',
    });

    $routeProvider.when('/search', {
        templateUrl: './templates/search.html'
    });

    $routeProvider.when('/wallpaper/:id', {
        templateUrl: './templates/wallpaper.html',
        controller: 'wallpaperCtrl'
    });

    $routeProvider.when('/favourites', {
        templateUrl: './templates/favourites.html',
        controller: 'favouritesCtrl'
    });
});