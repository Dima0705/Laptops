var mainApp = angular.module('mainApp');

mainApp.factory('createService', function ($http, $q) {
    var baseUrl = "http://localhost:42678/api/values/";

    return {
        getData: function (item, items) {
            var deferred = $q.defer();
            $http({ method: 'POST', url: baseUrl, data: item}).
             success(function (data, status, headers, config) {
                 items.push(data);
                 deferred.resolve(data);
             }).

            error(function (data, status, headers, config) {
                deferred.reject(status);
            });

            return deferred.promise;
        }
    }

});