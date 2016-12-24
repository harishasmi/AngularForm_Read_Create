/// <reference path="angular.js" />


angular.module("AngularFormModule.controllers",[]).
    controller("AddPlayerController", function ($scope, PlayerService) {
        $scope.message = "Enter your Details";

        $scope.AddPlayer = function () {
            PlayerService.AddPlayerToDB($scope.player);
        };
    }).
    controller("MainController", function ($scope, PlayerService) {
        $scope.message = "Main Controller";
        PlayerService.GetPlayersFromDB().then(function (response) {
            $scope.listPlayers = response.data.list;
        });

    }).
    factory("PlayerService", ["$http", function ($http) {
        var fac = {};
        fac.GetPlayersFromDB = function () {
            return $http.get("Player/GetPlayer");
        };

        fac.AddPlayerToDB = function (player) {
            $http.post("/Player/AddPlayer", player).then(function (response) {
                alert(response.data.status);
            });
        };

        return fac;
    }])