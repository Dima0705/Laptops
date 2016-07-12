var mainApp = angular.module('mainApp');

mainApp.controller('delController', function ($scope, delService) {

    var promiseObj = getLaptopListService.getData(10);
    promiseObj.then(function (value) {
        $scope.items = value;
        alert($scope.items);
    });

    $scope.orderProp = "Name";
});