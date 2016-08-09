var app = angular.module('instacritic', ['ngRoute']);
app.controller('instaCtrl', function($scope) {
  $scope.add = function() {
  }
});

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/', {
          template: 'This is the default route',
          templateUrl: 'view/index.html',
          controller: 'instaCtrl'
      }).when('/users', {
          template: 'This is the users route',
          templateUrl: 'view/templates/users.html',
          controller: 'instaReview'
      }).when('/shows', {
          template: 'This is the shows route',
          templateUrl: 'view/templates/shows.html',
          controller: 'instaShows'
      }).when('/reviews', {
          template: 'This is the reviews route',
          templateUrl: 'view/templates/review.html',
          controller: 'instaReviews'
      });
}]);
