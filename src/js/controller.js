app.controller('gameCtrl', ['$scope','gamesService', function($scope, gamesService){
    gamesService.initHours();
}]);