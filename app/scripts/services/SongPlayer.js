(function() {

  /**
  * @function SongPlayer
  * @desc Constructor for the SongPlayer controller
  * @return {Object} SongPlayer
  */
  function SongPlayer ($rootScope, Fixtures) {
    var SongPlayer = {};

    /**
    * @desc Stores the current album
    * @type {Object}
    */
    currentAlbum = Fixtures.getAlbum();

    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song) {
      if (currentBuzzObject) {
        stopSong();
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
          SongPlayer.currentTime = currentBuzzObject.getTime();
        });
      });

      currentBuzzObject.bind('ended', function() {
        SongPlayer.next();
      });

      SongPlayer.currentSong = song;
    };

    /**
    * @function playSong
    * @desc Plays the current song
    * @param {Object} song
    */
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };

    /**
    * @function stopSong
    * @desc Stops the current song, nulls currentSong
    */
    var stopSong = function() {
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    };

    /**
    * @function playSong
    * @desc Plays the current song
    * @param {Object} song
    * @return {Number} song
    */
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };

    /**
    * @desc Active song object from list of songs
    * @type {Object}
    */
    SongPlayer.currentSong = null;

    /**
    * @desc Current playback time (in seconds) of currently playing song
    * @type {Number}
    */
    SongPlayer.currentTime = null;

    /**
    * @desc Maintains the state of the current volume.
    * @type {Number}
    */
    SongPlayer.volume = 80;

    /**
    * @desc Tracks if mute is active (true) or not (false)
    * @type {Boolean}
    */
    SongPlayer.isMuted = false;

    /**
    * @function SongPlayer.mute
    * @desc Toggles isMuted variable and mutes/unumutes the sound
    * @param {Object} song
    */
    SongPlayer.toggleMute = function() {
      if (!SongPlayer.isMuted) {
        currentBuzzObject.mute();
        SongPlayer.isMuted = !SongPlayer.isMuted
      } else {
        currentBuzzObject.unmute();
        SongPlayer.isMuted = !SongPlayer.isMuted
      }
    };

    /**
    * @function SongPlayer.play
    * @desc Public function that will unpause or begin playing a song
    * @param {Object} song
    */
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong || currentAlbum.songs[0];

      if (SongPlayer.currentSong !== song) {
        setSong(song);
      }

      playSong(song);
    };

    /**
    * @function SongPlayer.pause
    * @desc Public function that will pause a song
    * @param {Object} song
    */
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };

    /**
    * @function SongPlayer.previous
    * @desc Public function that will play the previous song or stop if there is no previous song
    */
    SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;

      if (currentSongIndex >= currentAlbum.songs.length) {
        stopSong();
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    }

    /**
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

    /**
    * @function SongPlayer.setCurrentTime
    * @desc Set current time (in seconds) of currently playing song
    * @param {Number} time
    */
    SongPlayer.setCurrentTime = function(time) {
      if (currentBuzzObject) {
        currentBuzzObject.setTime(time);
      }
    };

    /**
    * @function SongPlayer.filterTimeCode
    * @desc Converts a time from seconds to a "minutes : seconds" format
    * @param {Number} timeInSeconds
    * @return {String}
    */
    SongPlayer.filterTimeCode = function(timeInSeconds) {
      return buzz.toTimer(timeInSeconds);
    };

    /**
    * @function SongPlayer.setVolume
    * @desc Sets volume to the given level
    * @param {Number} newVolume
    */
    SongPlayer.setVolume = function(newVolume) {
      if (currentBuzzObject) {
        currentBuzzObject.setVolume(newVolume);
      }
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
