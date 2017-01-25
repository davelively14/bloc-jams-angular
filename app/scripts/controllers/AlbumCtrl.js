(function() {

  function AlbumCtrl(Fixtures, SongPlayer, $scope) {
    $scope.albumData = Fixtures.getAlbum();
    $scope.songPlayer = SongPlayer;

    $scope.setRating = function(value) {
      Fixtures.rateAlbum($scope.albumData.id, value);
    };

    $scope.setSongRating = function(i, value) {
      Fixtures.rateSong($scope.albumData.id, i, value);
    };
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$scope', AlbumCtrl]);
})();
