(function() {

  function AlbumCtrl(Fixtures, SongPlayer, $scope, $stateParams) {
    $scope.albumData = Fixtures.getAlbum($stateParams.id);
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
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$scope', '$stateParams', AlbumCtrl]);
})();
