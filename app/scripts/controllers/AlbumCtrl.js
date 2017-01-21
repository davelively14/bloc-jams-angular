(function() {

  function AlbumCtrl() {
    this.albumData = angular.copy(albumPicasso);

    this.filterTimeCode = function(timeInSeconds) {
      var minutes = Math.floor(timeInSeconds / 60);
      var seconds = Math.floor(timeInSeconds % 60);
      return minutes + ":" + seconds;
    };
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
