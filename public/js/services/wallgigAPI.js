angular.module('wallgigService', [])
.factory('wallgigAPI', ['$http', '$q', function($http, $q) {
	var config = {
		headers: {
			'X-Mashape-Key': 'HxFuT1PGc1msh9eSKHg2vzJhATGDp1sRXxmjsnZ5LqALBcafTd',
			'Accept': 'text/plain'
		}
	};

	return {
		searchResults: [],

		fetchWallpapers: function(page) {
			var deferred = $q.defer();
			var pageNum = page || 1;
			var _this = this;

			$http.get('https://wallgig-v1.p.mashape.com/wallpapers?order=latest&page=' + pageNum + '&purity[]=sfw', config)
			.success(function(data) {
				deferred.resolve(data.wallpapers);
			});

			return deferred.promise;
		},

		searchWallpapers: function(query, reset, page) {
			var pageNum = page || 1;
			var _this = this;

			$http.get('https://wallgig-v1.p.mashape.com/wallpapers?order=latest&page=' + pageNum + '&purity[]=sfw&q=' + query, config)
			.success(function(data) {
				if (reset) {
					angular.copy(data.wallpapers, _this.searchResults);
				} else {
					var tempArray = _this.searchResults.concat(data.wallpapers);
					angular.copy(tempArray, _this.searchResults);
				}
			});
		},

		getWallpaper: function(id) {
			var _this = this;
			var deferred = $q.defer();

			$http.get('https://wallgig-v1.p.mashape.com/wallpapers/' + id, config)
			.success(function(data) {
				deferred.resolve(data);
			});

			return deferred.promise;
		}
	};
}]);