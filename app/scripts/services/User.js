(function() {

  function User() {
    var User = {};

    var userName = null;

    User.create = function(name) {
      userName = name;
    }

    User.getName = function() {
      return userName;
    }

    return User;
  }

  angular
    .module('blocJams')
    .factory('User', User);
})();
