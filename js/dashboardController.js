angular.module('photosApp')

angular.module('photosApp')

.controller('DashboardController', function(PhotoFactory) {
  var self = this;

  PhotoFactory.getPhotos()
    .then(function(response) {
      self.photos = response;
    });

});