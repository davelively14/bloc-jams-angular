(function() {

  function AlbumCtrl(Fixtures, SongPlayer) {
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;

    this.filterTimeCode = function(timeInSeconds) {
      var minutes = Math.floor(timeInSeconds / 60);
      var seconds = Math.floor(timeInSeconds % 60);
      return minutes + ":" + seconds;
    };
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
