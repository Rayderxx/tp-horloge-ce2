'use strict';
var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('app', {
            templateUrl: "app.html",
        })
        .state('home', {
            url: "/home",
            templateUrl: "home.html",
            resolve: {
                app: ['gamesService', function(gamesService){
                    gamesService.resetGame();
                }]
            }
        })
        .state('app.game', {
            url: "/game",
            templateUrl: 'game.html'
        })
        .state('app.options', {
            url: "/options",
            controller: "optionCtrl",
            templateUrl: 'options.html'
        })
        .state('app.credits', {
            url: "/credits",
            templateUrl: 'credits.html'
        });
}]);