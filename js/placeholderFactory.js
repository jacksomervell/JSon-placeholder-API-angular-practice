angular.module('photosApp')

.factory('PhotoFactory', function($http, $q) {
  var PhotoFactory = {
    getPhotos: function() {
      var deferred = $q.defer();

      $http
        .get('http://jsonplaceholder.typicode.com/photos')
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        })

        return deferred.promise;
    },

  return PhotoFactory;
});