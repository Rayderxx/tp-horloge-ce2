app.controller('gameCtrl', ['$scope','gamesService', function($scope, gamesService){

    gamesService.initHours();
    $scope.titre = gamesService.whichTime();
    $scope.response = {}

    $scope.checkHours = function(){
        var result = gamesService.win();
        console.log(result);
    }
}]);