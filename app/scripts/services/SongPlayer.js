(function() {

  /*
  * @function SongPlayer
  * @desc Constructor for the SongPlayer controller
  * @return {Object} SongPlayer
  */
  function SongPlayer (Fixtures) {
    var SongPlayer = {};

    /*
    * @desc Stores the current album
    * @type {Object}
    */
    var currentAlbum = Fixtures.getAlbum();

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
        SongPlayer.currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      SongPlayer.currentSong = song;
    };

    /*
    * @function playSong
    * @desc Plays the current song
    * @param {Object} song
    */
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };

    /*
    * @function stopSong
    * @desc Stops the current song, nulls currentSong
    */
    var stopSong = function() {
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    };

    /*
    * @function playSong
    * @desc Plays the current song
    * @param {Object} song
    * @return {Number} song
    */
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };

    /*
    * @desc Active song object from list of songs
    * @type {Object}
    */
    SongPlayer.currentSong = null;

    /*
    * @function SongPlayer.play
    * @desc Public function that will unpause or begin playing a song
    * @param {Object} song
    */
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;

      if (SongPlayer.currentSong !== song) {
        setSong(song);
      }

      playSong(song);
    };

    /*
    * @function SongPlayer.pause
    * @desc Public function that will pause a song
    * @param {Object} song
    */
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };

    /*
    * @function SongPlayer.previous
    * @desc Public function that will play the previous song or stop if there is no previous song
    */
    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if (currentSongIndex < 0) {
        stopSong();
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
