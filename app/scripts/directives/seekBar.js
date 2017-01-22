(function() {
  function seekBar($document) {

    /*
    * @function calculatePercent
    * @desc Calculates the horizontal percent along the seek bar where the event occurred.
    * @return {number}
    */
    var calculatePercent = function(seekBar, event) {
      var offsetX = event.pageX - seekBar.offset().left;
      var seekBarWidth = seekBar.width();
      var offsetXPercent = offsetX / seekBarWidth;
      offsetXPercent = Math.max(0, offsetXPercent);
      offsetXPercent = Math.min(1, offsetXPercent);
      return offsetXPercent;
    };

    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: { },
      link: function(scope, element, attributes) {
        /*
        * @desc Stores the current value of the seek bar. Default is 0.
        * @type {Number}
        */
        scope.value = 0;

        /*
        * @desc Stores the max value of the seek bar. Default is 100.
        * @type {Number}
        */
        scope.max = 100;

        /*
        * @desc The DOM element that matches the <seek-bar> as a jQuery object.
        * @type {Object}
        */
        var seekBar = $(element);

        /*
        * @function percentString
        * @desc Calculates and returns a percent based on the value and maximum value for the a seek bar
        * @return {String}
        */
        var percentString = function() {
          var value = scope.value;
          var max = scope.max;
          var percent = value / max * 100;
          return percent + "%";
        };

        /*
        * @function scope.fillStyle
        * @desc Returns the width of the seekbar for the given percentage
        * @return {Object}
        */
        scope.fillStyle = function() {
          return {width: percentString()};
        };

        /*
        * @function scope.thumbStyle
        * @desc Returns the location from the left of the screen for where the thumb should be
        * @return {Object}
        */
        scope.thumbStyle = function() {
          return {left: percentString()};
        };

        /*
        * @function scope.onClickSeekBar
        * @desc Updates the seek bar value based on the seek bar's width and the location of the user's click on the seek bar.
        */
        scope.onClickSeekBar = function() {
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max
        };

        /*
        * @function scope.trackThumb
        * @desc Similar to scope.onClickSeekBar, but uses $apply to constantly apply the change in value of scope.value as the user drags the seek bar thumb
        */
        scope.trackThumb = function() {
          $document.bind('mousemove.thumb', function() {
            var percent = calculatePercent(seekBar, event);
            scope.$apply(function() {
              scope.value = percent * scope.max
            });
          });

          $document.bind('mouseup.thumb', function() {
            $document.unbind('mousemove.thumb');
            $document.unbind('mouseup.thumb');
          })
        };
      }
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', ['$document', seekBar]);
})();
