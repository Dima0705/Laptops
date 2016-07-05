var mainApp = angular.module('mainApp');

mainApp.controller('laptopIdController', function ($scope, getLaptopIdService) {
    var promiseObjLaptopId = getLaptopIdService.getData();
    promiseObjLaptopId.then(function (value) {
        $scope.item = value;
        $scope.viewPicture = value.MainPicture;
    });

    var isSecondShow = false;
    $scope.styleWidthPic = { width: '700px' };
    $scope.changePicture = function (namePic) {
        if ($scope.viewPicture == namePic && !isSecondShow) {
            $scope.styleWidthPic = { width: '0px', margin: '0px' };
            isSecondShow = true;
        }
        else {
            $scope.viewPicture = namePic;
            $scope.styleWidthPic = { width: '700px' };
            isSecondShow = false;
        }
    }
});