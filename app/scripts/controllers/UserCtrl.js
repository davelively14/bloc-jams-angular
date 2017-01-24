(function() {
  function UserCtrl(User, $scope) {
    $scope.name = User.getName();
    $scope.submit = function() {
      User.create($scope.text);
      $scope.name = User.getName();
    };


  }

  angular
    .module('blocJams')
    .controller('UserCtrl', ['User', '$scope', UserCtrl])
})();
