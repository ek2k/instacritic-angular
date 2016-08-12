var app = angular.module('instacritic', ['ngRoute']);

console.log('booyah');

app.config(function($routeProvider, $locationProvider) {
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
      .when('/shows', {
          templateUrl: 'view/templates/shows.html',
          controller: 'ReviewController',
          controllerAs: 'shows'
      })
      .when('/review', {
          templateUrl: 'view/templates/review.html',
          controller: 'ReviewController',
          controllerAs: 'reviews'
      })
      .when('/about', {
        templateUrl: 'view/templates/about.html',
        controller: 'ReviewController',
      });
});



app.controller('IndexController', ['$scope', '$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
  $scope.view = {};

  var newData = {};

  $scope.NewUser = function(newUser) {
    console.log("clicked");
    newData = angular.copy(newUser);
    console.log(newData);
    $http({
      method: 'POST',
      url: '/users/new',
      data: newUser
    }).success(function(){
      console.log('success');
    })
  }

  $scope.LogIn = function(user) {
    console.log(user);
    $http({
      method:'POST',
      url: '/signin',
      data: user
    }).success(function(){
      console.log('success');
    })
  }
}]);


app.controller("ShowController", function($scope, $http) {
  $scope.view = {};
  $scope.view.findShow = function(){
      var title = $scope.view.title;
      $http ({
        method: 'GET',
        url: 'http://api.tvmaze.com/singlesearch/shows?q=' + title
    }).then(function successCallback(response){
        $scope.view.showTitle = response.data.name;
        $scope.view.showImg = response.data.image.medium;
    });
  }
});

app.controller("ReviewController", function($scope, $http) {
  $scope.view = {};
  $scope.view.findShow = function(){
      $scope.view.results=!$scope.view.results;
      var title = $scope.view.title;
      $http ({
        method: 'GET',
        url: 'http://api.tvmaze.com/singlesearch/shows?q=' + title
    }).then(function successCallback(response){
        console.log(response);
        $scope.view.showTitle = response.data.name;
        $scope.view.showImg = response.data.image.medium;
        $scope.view.showSummary = response.data.summary;
        $scope.view.airDay = response.data.schedule.days[0];
        if(!$scope.view.airDay){
            $scope.view.airDay = 'Show ended';
        }
        if(!response.data.network){
            $scope.view.network = 'Subscription';
        }else{
            $scope.view.network = response.data.network.name;

        }
        console.log(response);

          $http ({
            method: 'GET',
            url: '/reviews'
          }).then(function(result) {
            console.log(result)
            $scope.view.reviews = result;
          })
        });
  }
});
