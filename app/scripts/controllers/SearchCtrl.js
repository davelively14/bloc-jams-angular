(function() {
  function SearchCtrl($scope, Fixtures) {
    var albums = Fixtures.getAllAlbums();
    $scope.albumResults = [];
    $scope.songResults = [];
    $scope.artistResults = [];

    $scope.submit = function() {
      $scope.albumResults = [];
      $scope.songResults = [];
      $scope.artistResults = [];

      var str = $scope.text;

      for (var i = 0; i < albums.length; i++) {
        if (albums[i].title.toLowerCase().search(str.toLowerCase()) >= 0) {
          $scope.albumResults.push(albums[i]);
        }

        if (albums[i].artist.toLowerCase().search(str.toLowerCase()) >= 0) {
          $scope.artistResults.push(albums[i]);
        }

        for (var song = 0; song < albums[i].songs.length; song++) {
          if (albums[i].songs[song].title.toLowerCase().search(str.toLowerCase()) >= 0) {
            $scope.songResults.push({song: albums[i].songs[song], album: albums[i]});
          }
        }
      }
    }
  }

  angular
    .module('blocJams')
    .controller('SearchCtrl', ['$scope', 'Fixtures', SearchCtrl]);
})();
