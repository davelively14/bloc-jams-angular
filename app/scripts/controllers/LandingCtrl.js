(function() {

  function LandingCtrl() {
    this.heroTitle = "Turn the Music Up!";
  }

  // Retrieves module and calls controller on it
  angular
    .module('blocJams')
    .controller('LandingCtrl', LandingCtrl);
})();
