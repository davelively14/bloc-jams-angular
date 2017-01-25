(function() {

  function Fixtures() {
    var Fixtures = {};

    var albumPicasso = {
      id: 0,
      title: 'The Colors',
      artist: 'Pablo Picasso',
      label: 'Cubism',
      year: '1881',
      albumArtUrl: '/assets/images/album_covers/01.png',
      songs: [
        { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue', rating: null },
        { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green', rating: null },
        { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red', rating: null },
        { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink', rating: null },
        { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta', rating: null }
      ],
      rating: 0
    };

    var albumMarconi = {
      id: 1,
      title: 'The Telephone',
      artist: 'Guglielmo Marconi',
      label: 'EM',
      year: '1909',
      albumArtUrl: '/assets/images/album_covers/20.png',
      songs: [
        { title: 'Hello, Operator?', duration: '1:01', rating: null },
        { title: 'Ring, ring, ring', duration: '5:01', rating: null },
        { title: 'Fits in your pocket', duration: '3:21', rating: null },
        { title: 'Can you hear me now?', duration: '3:14', rating: null },
        { title: 'Wrong phone number', duration: '2:15', rating: null }
      ],
      rating: 0
    };

    Fixtures.getAlbum = function() {
      return albumPicasso;
    };

    Fixtures.getAllAlbums = function() {
      return [albumPicasso, albumMarconi];
    };

    Fixtures.rateAlbum = function(albumId, rating) {
      var allAlbums = Fixtures.getAllAlbums();

      var album = allAlbums.find(function(x) {
        return x.id == albumId;
      });
      album.rating = rating;
    };

    Fixtures.rateSong = function(albumId, songIndex, rating) {
      var allAlbums = Fixtures.getAllAlbums();

      var album = allAlbums.find(function(x) {
        return x.id == albumId;
      });

      album.songs[songIndex].rating = rating;
    };

    Fixtures.getCollection = function(numberOfAlbum) {
      var result = []

      for(let i = 0; i <= numberOfAlbum; i++) {
        result.push(albumPicasso);
      }

      return result;
    };

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();
