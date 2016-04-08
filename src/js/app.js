// sample angular code

var app = angular.module('myApp', []);


app.directive('logIn', function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '../login.html'
    };
});
