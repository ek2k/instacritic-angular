var app = angular.module('instacritic', ['firebase']);
app.controller('instaCtrl', function($scope, $firebaseArray, $firebaseAuth) {
  var ref = new Firebase("https://instacritic.firebaseio.com/");

  $scope.criticArray = $firebaseArray(ref);

  $scope.critics = $firebaseArray(ref);

  $scope.addReview = function() {
    $scope.critics.$add({
      show: $scope.show,
      genre: $scope.genre,

    })
  }

  var auth = $firebaseAuth(ref);

  auth.$authWithOutAuthPopup("facebook").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authenticaiton failed:", error);
  });

  // syncObject.$bindTo($scope, "data");
  //can use data.name etc fo render data in the dom
});
