(function() {

  function User() {
    var User = {};

    var userName = null;
    var userEmail = null;
    var userBand = null;

    User.create = function(name, email, band) {
      userName = name;
      userEmail = email;
      userBand = band;
    };

    User.getName = function() {
      return userName;
    };

    User.getUser = function() {
      return {userName: userName, email: userEmail, band: userBand};
    };

    return User;
  }

  angular
    .module('blocJams')
    .factory('User', User);
})();
