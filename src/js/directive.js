//init clock with kineticjs
app.directive('horloge', function(gamesService) {
    return {
        restrict: 'A',
        controler: "gameCtrl",
        link: function (scope, element) {
            gamesService.startGame();
            scope.titre = gamesService.whichTime();
            gamesService.clock.setTime(gamesService.hours, gamesService.minutes);
        }
    };
});

//init template for hours
app.directive('hours', function() {
    return {
        scope : {
            type: "@type",
            date: "@date"
        },
        controller: "gameCtrl",
        restrict: 'E',
        templateUrl: 'select-form.html'
    };
});

//init arrow for hours selection
app.directive('switch', function(gamesService) {
    return {
        restrict: 'A',
        controller: "gameCtrl",
        link: function (scope, element, attrs) {
            element.on('click', function(){
                var time = element.parent().parent().find('.time');
                var value = time.html();
                value = gamesService.checkArrow(value, attrs, element);
                time.html(value);
            });
        }
    };
});

app.directive('popup', function(gamesService){
    return {
        controller: "gameCtrl",
        templateUrl: 'popup.html',
        link: function(scope, element, iAttrs){
            scope.$watch(function(){
                return gamesService.showPopup;
            }, function(newVal, oldVal){
                if(newVal) {
                    element.show();
                }else{
                    element.hide();
                }
            });
        }
    }
});

app.directive('replay', function(gamesService){
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function(e){
                $('.select-contain .time').html("0");
                e.preventDefault();
            });
        }
    }
});