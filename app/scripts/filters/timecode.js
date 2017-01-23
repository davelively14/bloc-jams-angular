(function() {
  function timecode() {

    return function(seconds) {
      var seconds = Number.parseFloat(seconds);

      if (Number.isNaN(seconds)) {
        return '-:--';
      }

      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = Math.floor(seconds % 60);

      var output = minutes + ':';

      if (remainingSeconds < 10) {
        output += '0';
      }

      output += remainingSeconds;

      return output;
    };

  }

  angular
    .module('blocJams')
    .filter('timecode', timecode);
})();
