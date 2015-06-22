angular.module('wallgigService', [])
.factory('wallgigAPI', function($http) {
	var config = {
		headers: {
			'X-Mashape-Key': 'HxFuT1PGc1msh9eSKHg2vzJhATGDp1sRXxmjsnZ5LqALBcafTd',
			'Accept': 'text/plain'
		}
	};

	return {
		wallpapers: [],

		fetchWallpapers: function(page) {
			var pageNum = page || 1;
			var _this = this;

			$http.get('https://wallgig-v1.p.mashape.com/wallpapers?order=latest&page=' + pageNum + '&purity[]=sfw', config)
			.success(function(data) {
				angular.copy(data.wallpapers, _this.wallpapers);
				console.log(_this.wallpapers);
			});
		}
	};
});