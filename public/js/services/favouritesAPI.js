angular.module('favouritesService', [])
.factory('favouritesAPI', ['$http', '$q', function($http, $q) {
	return {
		favourites: [],

		findWallpaper: function(id) {
			return _.where(this.favourites, {id: id});	
		},

		getFavourites: function() {
			var deferred = $q.defer();
			var _this = this;

			$http.get('/api/favourites')
			.success(function(data) {
				angular.copy(data, _this.favourites);
				deferred.resolve();
			})
			.error(function(err) {
				console.log(err);
				deferred.reject();
			});

			return deferred.promise;
		},

		toggleFavourite: function(id, url) {
			if (this.findWallpaper(id).length === 0) {
				this.saveFavourite(id, url);
			} else {
				this.deleteFavourite(id);
			}
		},

		saveFavourite: function(id, url) {
			var data = {
				id: id,
				url: url
			};
			var _this = this;

			$http.post('/api/favourites', data)
			.success(function(data) {
				angular.copy(data, _this.favourites);
			})
			.error(function(err) {
				console.log(err);
			});
		},

		deleteFavourite: function(id) {
			var _this = this;

			$http.delete('/api/favourites/' + id)
			.success(function(data) {
				angular.copy(data, _this.favourites);
			})
			.error(function(err) {
				console.log(err);
			});
		}
	};
}]);