app.controller('gameCtrl', ['$scope','gamesService', function($scope, gamesService){
    $scope.response = {}
    $scope.checkHours = function(){
        var result = gamesService.win();
    }
}]);