
/// <reference path="angular-route.min.js" />


var app = angular.module("AngularFormModule", ["AngularFormModule.controllers", "ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "Partials/PlayerList.html",
            controller: "MainController"
        }).
        when("/AddPlayer", {
            templateUrl: "Partials/AddPlayer.html",
            controller: "AddPlayerController"
        }).
        otherwise({ redirectTo: "/"})
}]);