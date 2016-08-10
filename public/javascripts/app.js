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
      }).when('/users/new', {
          templateUrl: 'views/templates/newUser.html',
          controller: 'UserController',
          controllerAs: 'users'
      }).when('/users/:id/edit', {
          templateUrl: 'views/templates/editUser.html',
          controller: 'UserController',
          controllerAs: 'users'
      }).when('/users/:id/delete', {
          templateUrl: 'views/templates/delUser.html',
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
    var newData = {
      username: $scope.view.username,
      password: $scope.view.password,
      email: $scope.view.email,
      avatar: $scope.view.avatar,
      city: $scope.view.city,
      state: $scope.view.state
    }
  }

  $scope.UpdateData = function(username, password, email, avatar, city, state){
    var updateData = {
      username: username,
      password: password,
      email: email,
      avatar: avatar,
      city: city,
      state: state
    }
  }

  $http ({
    method: 'GET',
    url: '/users'
  }).then(function(users){
    $scope.view = users;
    console.log($scope.view);
  })
}])

  $http.post('/users/new', newData).then(function(users){
    $scope.view = users;
    console.log($scope.view);
  })

  $http.put('/users/:id/edit', updateData).then(function(users){
    $scope.view = users;
  })

  $http.delete('/users/:id/delete', Data)

app.controller('UserController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.view = {};
  $http ({})
}])

app.controller('UserController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.view = {};
  $http ({})
}])
