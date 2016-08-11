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
          controller: 'ReviewController',
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

app.config(function($routeProvider, $locationProvider) {
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



app.controller('IndexController', ['$scope', '$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
  $scope.view = {};

  var newData = {};

  $scope.NewUser = function(user) {
    console.log("clicked");
    newData = angular.copy(user);
    console.log(newData);
    $http({
      method: 'POST',
      url: '/users/new',
      data: user
    }).success(function(){
      $location.path('/users');
    })
  }
}]);

app.controller('UserController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.view = {};



  $http ({
    method: 'GET',
    url: '/users'
  }).then(function(users){
    $scope.view = users;
  })
}])



app.controller('UserController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.view = {};
  $http ({})
}]);


app.controller("ReviewController", function($scope, $http) {
  $scope.view = {};
  $scope.view.findShow = function(){
      var title = $scope.view.title;
      $http ({
        method: 'GET',
        url: 'http://api.tvmaze.com/singlesearch/shows?q=' + title
    }).then(function successCallback(response){
        $scope.view.showTitle = response.data.name;
        $scope.view.showImg = response.data.image.medium;
        console.log(response.data.image.medium);
        console.log(response);
    });
  }
});
