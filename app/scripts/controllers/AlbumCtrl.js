(function() {

  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum();

    this.filterTimeCode = function(timeInSeconds) {
      var minutes = Math.floor(timeInSeconds / 60);
      var seconds = Math.floor(timeInSeconds % 60);
      return minutes + ":" + seconds;
    };
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
