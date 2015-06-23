angular.module('headerDirective', [])
.directive('header', function() {
	return {
		restrict: 'E',
		templateUrl: './templates/header.html'	
	};
});