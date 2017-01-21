(function() {

  function config($stateProvider, $locationProvider) {

    // Angular core component. Configures app deep linking path storage.
    $locationProvider
      .html5Mode({
        // Avoids setting a base
        enabled: true,

        // requireBase: false will disable hashbangs (#!)
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
        url: '/album',
        templateUrl: '/templates/album.html'
      })
      .state('collection', {
        url: '/collection',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html'
      });
  }

  // This is like calling angular.module(...).config(config). But it's easier to read
  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();
