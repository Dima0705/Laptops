angular.module('mainApp', ['ngRoute'])
.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
          when('/Home/Index', {
              templateUrl: 'app/views/laptopsList.html',
              controller: 'laptopListController'
          }).
          when('/laptops/:laptopId', {
              templateUrl: 'app/views/laptopId.html',
              controller: 'laptopIdController'
          }).
          otherwise({
              redirectTo: '/Home/Index'
          });
  }]);