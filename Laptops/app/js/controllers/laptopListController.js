var mainApp = angular.module('mainApp');

mainApp.controller('laptopListController', function ($scope, getLaptopListService) {

    var promiseObj = getLaptopListService.getData();
    promiseObj.then(function (value) {
        $scope.items = value;
    });

    $scope.orderProp = "Name";
});