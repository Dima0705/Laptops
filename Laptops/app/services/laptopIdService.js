var mainApp = angular.module('mainApp');

mainApp.factory('getLaptopIdService', function ($http, $q, $routeParams) {
    var baseUrl = "http://localhost:42678/api/values/";

    return {
        getData: function () {
            var deferred = $q.defer();
            $http({ method: 'GET', url: baseUrl + $routeParams.laptopId }).

             success(function (data, status, headers, config) {
                 deferred.resolve(data);
             }).

            error(function (data, status, headers, config) {
                deferred.reject(status);
            });

            return deferred.promise;
        }
    }

});