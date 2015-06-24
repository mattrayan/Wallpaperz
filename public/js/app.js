angular.module('wallpaperz', ['ngRoute', 'wallgigService', 'gallery', 'wallpaper', 'favouriteDirective', 'headerDirective', 'thumbnailsDirective'])

.controller('wallpaperzCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.searchForm = {};

    $scope.go = function(path) {
        $location.path(path);
    };
}])

.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './templates/gallery.html',
        controller: 'galleryCtrl'
    });

    $routeProvider.when('/search', {
        templateUrl: './templates/search.html'
    });

    $routeProvider.when('/wallpaper/:id', {
        templateUrl: './templates/wallpaper.html',
        controller: 'wallpaperCtrl'
    });
});