var app = angular.module('instacritic', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'views/templates/home.html',
          controller: 'IndexController',
          controllerAs: 'index'
      }).when('/users', {
          templateUrl: 'views/templates/users.html',
          controller: 'UserController',
          controllerAs: 'users'
      }).when('/shows', {
          templateUrl: 'view/templates/shows.html',
          controller: 'ShowController',
          controllerAs: 'shows'
      }).when('/reviews', {
          templateUrl: 'view/templates/books.html',
          controller: 'ReviewController',
          controllerAs: 'reviews'
      });
}]);


app.controller('IndexController', function($scope) {
  $scope.view = {};
});

app.controller('UserController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.view = {};

  $scope.SendData = function() {
    var data = $.params({
      username: $scope.view.username,
      password: $scope.view.password,
      email: $scope.view.email,
      avatar: $scope.view.avatar,
      city: $scope.view.city,
      state: $scope.view.state
    })
  }

  $http ({
    method: 'GET',
    url: '/books'
  }).then(function(books){
    $scope.view = books;
    console.log($scope.view);
  })
}])

  $http({
    method: 'POST',
    url: '/books/new'
  })

app.controller('UserController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.view = {};
  $http ({})
}])

app.controller('UserController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.view = {};
  $http ({})
}])
