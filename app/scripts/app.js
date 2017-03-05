(function() {

  function config($stateProvider, $locationProvider) {

    // Angular core component. Configures app deep linking path storage.
    $locationProvider
      .html5Mode({
        // Enabling html5Mode will will disable hashbangs (#!) in the url (i.e. no more bob.io/#!/album)
        enabled: true,

        // Avoids a common $location:nobase error
        requireBase: false
      });

    // UI-Router core component. Sets route for a module.
    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })
      .state('album', {
        url: '/album?id',
        controller: 'AlbumCtrl as album',
        templateUrl: '/templates/album.html'
      })
      .state('collection', {
        url: '/collection',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html'
      })
      .state('user', {
        url: '/user',
        controller: 'UserCtrl as user',
        templateUrl: '/templates/user.html'
      })
      .state('search', {
        url: '/search',
        controller: 'SearchCtrl as search',
        templateUrl: '/templates/search.html'
      });
  }

  // This is like calling angular.module(...).config(config). But it's easier to read
  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();
