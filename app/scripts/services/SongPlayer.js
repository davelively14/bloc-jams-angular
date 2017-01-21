(function() {
  function SongPlayer () {
    var SongPlayer = {};


    /*
    * @desc Song object
    * @type {Object}
    */
    var currentSong = null;

    /*
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /*
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentSong = song;
    };

    /*
    * @function SongPlayer.play
    * @desc Public function that will unpause or begin playing a song
    * @param {Object} song
    */
    SongPlayer.play = function(song) {
      if (currentSong !== song) {
        setSong(song);
        currentBuzzObject.play();
        song.playing = true;
      } else {
        if (currentBuzzObject.isPaused()) {
          currentBuzzObject.play();
        }
      }
    };

    /*
    * @function SongPlayer.pause
    * @desc Public function that will pause a song
    * @param {Object} song
    */
    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
