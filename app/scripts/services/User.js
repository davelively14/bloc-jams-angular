(function() {

  function User() {
    var User = {};

    var data = {};

    User.create = function(name, email, band) {
      data.userName = name;
      data.email = email;
      data.band = band;
    };

    User.getName = function() {
      return userName;
    };

    User.getUser = function() {
      return data;
    };

    return User;
  }

  angular
    .module('blocJams')
    .factory('User', User);
})();
