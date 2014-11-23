app.controller('gameCtrl', ['$scope','gamesService', function($scope, gamesService){
    $scope.response = {}
    $scope.checkHours = function(){
        $scope.popupImage = "loose";
        $scope.showMessage = true;
        $scope.hours = gamesService.hoursToString();
        if(gamesService.win()){
            $scope.popupImage = "win";
            $scope.showMessage = false;
        }
    }

    $scope.hidePopup = function() {
        gamesService.showPopup = false;
    }

    $scope.replay = function(){
        gamesService.resetGame();
        gamesService.startGame();
        $scope.titre = gamesService.whichTime();
        gamesService.clock.setTime(gamesService.hours, gamesService.minutes);
    }
}]);