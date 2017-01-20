(function() {
  function config($stateProvider, $locationProvider) {

    // Angular core component
    $locationProvider
      .html5Mode({
        // Avoids setting a base
        enabled: true,

        // requireBase: false will disable hashbangs (#!)
        requireBase: false
      });
      
    // UI-Router core component
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/templates/landing.html'
      })
      .state('album', {
        url: '/album',
        templateUrl: '/templates/album.html'
      });
  }

  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();
