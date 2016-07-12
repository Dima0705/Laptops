var mainApp = angular.module('mainApp');

mainApp.factory('putService', function ($http, $q) {
    var baseUrl = "http://localhost:42678/api/values/";

    return {
        getData: function (item, items) {
            var deferred = $q.defer();
            $http({ method: 'PUT', url: baseUrl + item.Id, data:item }).
             success(function (data, status, headers, config) {
                 for (var i = 0; i < items.length; i++) {
                     if (items[i].Id == item.Id) {
                         items[i] = item;
                         break;
                     }
                 }
             }).

            error(function (data, status, headers, config) {
                deferred.resolve(false);
            });

            return deferred.promise;
        }
    }

});