var mainApp = angular.module('mainApp');

mainApp.controller('laptopListController', function ($scope, getLaptopListService, delService, createService, putService) {
    $scope.optionOfLaptop = "Добавление ";
    $scope.orderProp = "Id";

    var promiseObj = getLaptopListService.getData();
    promiseObj.then(function (value) {
        $scope.items = value;
    });

    $scope.sortReverse = true;
    $scope.symbol = "↓";
    $scope.symbolSort = function () {
        if ($scope.sortReverse)
            $scope.symbol = "↓";
        else
            $scope.symbol = "↑";
    }

    function refresh() {
        $scope.Name = "";
        $scope.ReleaseDate = "";
        $scope.Type = "рабочий (офисный)";
        $scope.CPU = "";
        $scope.CPUName = "";
        $scope.NumberOfCores = "";
        $scope.CPUFrequency = "";
        $scope.CPUConsumption = "";
        $scope.BodyMaterial = "металл";
        $scope.BodyColor = "черный";
        $scope.CapMaterial = "металл";
        $scope.CapColor = "черный";
        $scope.Width = "";
        $scope.Depth = "";
        $scope.Thickness = "";
        $scope.Weight = "";
        $scope.ScreenDiagonal = "";
        $scope.ScreenHeightPx = "";
        $scope.ScreenWidthPx = "";
        $scope.ScreenTechnology = "TN+Film";
        $scope.ScreenSurface = "глянцевая";
        $scope.IsTouchScreen = "1";
        $scope.Is3DScreen = "1";
        $scope.TypeRAM = "DDR3";
        $scope.SizeRAM = "";
        $scope.MaxSizeRAM = "";
        $scope.NumberOfRAMSlots = "";
        $scope.TypeHD = "HDD";
        $scope.SizeHD = "";
        $scope.SpeedHD = "";
        $scope.GA = "";
        $scope.TypeGA = "дискретный";
        $scope.SizeVRAM = "";
        $scope.NumberOfBatteryCells = "";
        $scope.Price = "";
        $scope.MainPicture = "";
    }

    refresh();

    $scope.delItem = function (item) {
        var promiseObjDel = delService.getData(item, $scope.items);
        promiseObjDel.then(function (value) {
        });
    }

    $scope.putItem = function (item) {
        var promiseObjPut = putService.getData(item, $scope.items);
        promiseObjPut.then(function (value) {
        });
    }

    var currentItem = null;


    $scope.createOrPutItem = function () {
        var item = {};

        item.Name = $scope.Name;
        item.ReleaseDate = Number($scope.ReleaseDate);
        item.Type = $scope.Type;
        item.CPU = $scope.CPU;
        item.CPUName = $scope.CPUName;
        item.NumberOfCores = Number($scope.NumberOfCores);
        item.CPUFrequency = Number($scope.CPUFrequency);
        item.CPUConsumption = Number($scope.CPUConsumption);
        item.BodyMaterial = $scope.BodyMaterial;
        item.BodyColor = $scope.BodyColor;
        item.CapMaterial = $scope.CapMaterial;
        item.CapColor = $scope.CapColor;
        item.IsStrength = null;
        item.Width = Number($scope.Width);
        item.Depth = Number($scope.Depth);
        item.Thickness = Number($scope.Thickness);
        item.Weight = Number($scope.Weight);
        item.ScreenDiagonal = Number($scope.ScreenDiagonal);
        item.ScreenHeightPx = Number($scope.ScreenHeightPx);
        item.ScreenWidthPx = Number($scope.ScreenWidthPx);
        item.ScreenTechnology = $scope.ScreenTechnology;
        item.ScreenSurface = $scope.ScreenSurface;
        item.IsTouchScreen = Boolean(Number($scope.IsTouchScreen));
        item.Is3DScreen = Boolean(Number($scope.Is3DScreen));
        item.TypeRAM = $scope.TypeRAM;
        item.SizeRAM = Number($scope.SizeRAM);
        item.MaxSizeRAM = Number($scope.MaxSizeRAM);
        item.NumberOfRAMSlots = Number($scope.NumberOfRAMSlots);
        item.TypeHD = $scope.TypeHD;
        item.SizeHD = Number($scope.SizeHD);
        item.SpeedHD = Number($scope.SpeedHD);
        item.GA = $scope.GA;
        item.TypeGA = $scope.TypeGA;
        item.SizeVRAM = Number($scope.SizeVRAM);
        item.NumberOfBatteryCells = Number($scope.NumberOfBatteryCells);
        item.Price = Number($scope.Price);
        //item.MainPicture = $scope.MainPicture;

        if (currentItem != null) {
            
            item.Id = currentItem.Id;
            item.MainPicture = currentItem.MainPicture;
            $scope.putItem(item);       // Изменяем объект

            $scope.styleChangingItem = { visibility: 'hidden' };
            $scope.optionOfLaptop = "Добавление ";
            isChangingClick = true;
        }
        else {
            var files = document.getElementById('uploadFile').files;
            if (files.length > 0) {
                var pictureFile = new FormData();
                item.MainPicture = $scope.Name + "_Main.jpg";
                pictureFile.append($scope.Name + "_Main.jpg", files[0]);
                $.ajax({
                    type: "POST",
                    url: 'api/pictures/post',
                    contentType: false,
                    processData: false,
                    data: pictureFile,
                    success: function (result) {
                    },
                    error: function (xhr, status, p3) {
                    }
                });
            }
            else {
                item.MainPicture = "None.jpg";
            }
            $scope.createItem(item);    // Создаем объект
            $scope.styleChangingItem = { visibility: 'hidden' };
            isChangingClick = true;
        }
        currentItem = null;
        refresh();
        $scope.styleExpending = { height: '30px' };
        $scope.styleOpacity = { visibility: 'hidden' };
        isExpendingClick = true;
    }

    $scope.changeFunc = function (item) {
        $scope.optionOfLaptop = "Редактирование ";
        isChangingClick = false;
        currentItem = item;

        $scope.Name = item.Name;
        $scope.ReleaseDate = item.ReleaseDate;
        $scope.Type = item.Type;
        $scope.CPU = item.CPU;
        $scope.CPUName = item.CPUName;
        $scope.NumberOfCores = item.NumberOfCores;
        $scope.CPUFrequency = item.CPUFrequency;
        $scope.CPUConsumption = item.CPUConsumption;
        $scope.BodyMaterial = item.BodyMaterial;
        $scope.BodyColor = item.BodyColor;
        $scope.CapMaterial = item.CapMaterial;
        $scope.CapColor = item.CapColor;
        $scope.Width = item.Width;
        $scope.Depth = item.Depth;
        $scope.Thickness = item.Thickness;
        $scope.Weight = item.Weight;
        $scope.ScreenDiagonal = item.ScreenDiagonal;
        $scope.ScreenHeightPx = item.ScreenHeightPx;
        $scope.ScreenWidthPx = item.ScreenWidthPx;
        $scope.ScreenTechnology = item.ScreenTechnology;
        $scope.ScreenSurface = item.ScreenSurface;
        $scope.IsTouchScreen = Number(item.IsTouchScreen);
        $scope.Is3DScreen = Number(item.Is3DScreen);
        $scope.TypeRAM = item.TypeRAM;
        $scope.SizeRAM = item.SizeRAM;
        $scope.MaxSizeRAM = item.MaxSizeRAM;
        $scope.NumberOfRAMSlots = item.NumberOfRAMSlots;
        $scope.TypeHD = item.TypeHD;
        $scope.SizeHD = item.SizeHD;
        $scope.SpeedHD = item.SpeedHD;
        $scope.GA = item.GA;
        $scope.TypeGA = item.TypeGA;
        $scope.SizeVRAM = item.SizeVRAM;
        $scope.NumberOfBatteryCells = item.NumberOfBatteryCells;
        $scope.Price = item.Price;
        $scope.MainPicture = item.MainPicture;

        $scope.styleChangingItem = {visibility: 'hidden' };

        $scope.styleExpending = { height: '1750px' };
        $scope.styleOpacity = { visibility: 'visible' };
        isExpendingClick = false;
    }

    $scope.createItem = function (itemLaptop) {
        var item = {};
        item = itemLaptop;

        var promiseObjCreate = createService.getData(item, $scope.items);
        promiseObjCreate.then(function (value) {
        });
    }

    var isExpendingClick = true;
    var isChangingClick = true;

    $scope.expendAddBlock = function () {
        if (isChangingClick) {
            $scope.styleChangingItem = { visibility: 'visible' };
        }
        if (isExpendingClick) {
            $scope.styleExpending = { height: '1750px' };
            $scope.styleOpacity = { visibility: 'visible' };
            isExpendingClick = false;
        }
        else {
            $scope.styleExpending = { height: '30px' };
            $scope.styleOpacity = { visibility: 'hidden' };
            isExpendingClick = true;
        }
    }

    $scope.cancelClick = function () {
        $scope.optionOfLaptop = "Добавление ";
        $scope.styleExpending = { height: '30px' };
        $scope.styleOpacity = { visibility: 'hidden' };
        $scope.styleChangingItem = { visibility: 'hidden' };
        isExpendingClick = true;
        idForPutingLaptop = null;
        refresh();
    }

});