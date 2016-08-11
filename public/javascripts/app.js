var app = angular.module('instacritic', ['ngRoute']);

console.log('booyah');

app.config(function($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'view/templates/home.html',
          controller: 'IndexController',
          controllerAs: 'index'
      })
      .when('/users', {
          templateUrl: 'view/templates/users.html',
          controller: 'UserController',
          controllerAs: 'users'
      })
      .when('/users/new', {
          templateUrl: 'view/templates/newUser.html',
          controller: 'UserController',
          controllerAs: 'users'
      })
      .when('/users/:id/edit', {
          templateUrl: 'view/templates/editUser.html',
          controller: 'UserController',
          controllerAs: 'users'
      })
      .when('/users/:id/delete', {
          templateUrl: 'view/templates/delUser.html',
          controller: 'UserController',
          controllerAs: 'users'
      })
      .when('/shows', {
          templateUrl: 'view/templates/shows.html',
          controller: 'ShowController',
          controllerAs: 'shows'
      })
      .when('/reviews', {
          templateUrl: 'view/templates/books.html',
          controller: 'ReviewController',
          controllerAs: 'reviews'
      });
});


app.controller('IndexController', function($scope) {
  $scope.view = {};
});

app.controller('UserController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.view = {};

  $scope.SendData = function(username, password, email, avatar, city, state) {

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
