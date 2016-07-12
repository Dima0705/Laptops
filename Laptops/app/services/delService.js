var mainApp = angular.module('mainApp');

mainApp.factory('delService', function ($http, $q) {
    var baseUrl = "http://localhost:42678/api/values/";

    return {
        getData: function (item, items) {
            var deferred = $q.defer();
            $http({ method: 'DELETE', url: baseUrl + item.Id }).
             success(function (data, status, headers, config) {
                 items.splice(items.indexOf(item), 1);
                 //deferred.resolve(items);
             }).

            error(function (data, status, headers, config) {
                deferred.resolve(false);
            });

            return deferred.promise;
        }
    }

});