angular.module('photosApp')

      // this.addPhoto = addPhoto;
      // this.newPhoto = {};
      // var self = this

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
    }

    // addPhoto: function() {
    //   var deferred = $q.defer();

    //   $http
    //   .post('http://jsonplaceholder.typicode.com/photos', self.newPhoto)
    //   .success(function(response){
    //     self.newPhoto = {} //this resets the object
    //     deferred.resolve(response)
    //   })
    //   .error(function(error) {
    //       deferred.reject(error);
    //     })
    //   getPhotos()
    //   return deferred.promise;
    // }
    
  }
  return PhotoFactory;
});
