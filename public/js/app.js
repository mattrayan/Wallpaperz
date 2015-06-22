angular.module('wallpaperz', ['ngRoute', 'wallgigService', 'gallery'])

.controller('wallpaperzCtrl', ['$scope', function($scope) {
    $scope.activePic = undefined;
}])

.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './templates/gallery.html',
        controller: 'galleryCtrl'
    });
});