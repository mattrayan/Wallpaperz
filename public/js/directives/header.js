angular.module('headerDirective', [])
.directive('header', function() {
	return {
		restrict: 'E',
		templateUrl: './templates/header.html',
		controller: ['$scope', 'wallgigAPI', function($scope, wallgigAPI) {
			$scope.search = function() {
				wallgigAPI.searchWallpapers($scope.searchForm.query);
				$scope.go('/search');
			};

			$scope.goHome = function() {
				wallgigAPI.fetchWallpapers();
				$scope.go('/');
			};
		}]
	};
});