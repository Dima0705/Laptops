var mainApp = angular.module('mainApp');

mainApp.factory('getLaptopListService', function ($http, $q) {
    var baseUrl = "http://localhost:42678/api/values/";

    return {
        getData: function () {
            var deferred = $q.defer();
            $http({ method: 'GET', url: baseUrl }).

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