var app = angular.module('instacritic', ['firebase']);
app.controller('instaCtrl', function($scope, $firebaseOject) {
  var ref = new Firebase("https://instacritic.firebaseio.com/");

  $scope.data = $firebaseObject(ref);
});
