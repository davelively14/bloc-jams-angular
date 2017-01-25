(function() {
  function UserCtrl(User, $scope) {
    $scope.user = User.getUser();
    $scope.name = $scope.user.userName;
    $scope.email = $scope.user.email;
    $scope.band = $scope.user.band;

    $scope.submit = function() {
      User.create($scope.text, $scope.email, $scope.band);
      $scope.user = User.getUser();
      $scope.name = $scope.user.userName;
      $scope.email = $scope.user.email;
      $scope.band = $scope.user.band;
    };

  }

  angular
    .module('blocJams')
    .controller('UserCtrl', ['User', '$scope', UserCtrl])
})();
