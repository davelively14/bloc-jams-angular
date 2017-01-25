(function() {
  function CollectionCtrl(Fixtures) {
    this.albums = Fixtures.getAllAlbums();
  }

  angular
    .module('blocJams')
    .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
