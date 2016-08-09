var app = angular.module('instacritic', ['firebase']);
app.controller('instaCtrl', function($scope, $firebaseOject) {
  var ref = new Firebase("https://instacritic.firebaseio.com/");

  var syncObject = $firebaseObject(ref);

  syncObject.$bindTo($scope, "data");
  //can use data.name etc fo render data in the dom
});
