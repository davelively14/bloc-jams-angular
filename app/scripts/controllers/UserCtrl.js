(function() {
  function UserCtrl(User, $scope) {
    $scope.user = User.getUser();

    $scope.submit = function() {
      User.create($scope.text, $scope.email, $scope.band);
      $scope.user = User.getUser();
    };

  }

  angular
    .module('blocJams')
    .controller('UserCtrl', ['User', '$scope', UserCtrl])
})();
