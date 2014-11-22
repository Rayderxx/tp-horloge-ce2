//init clock with kineticjs
app.directive('horloge', function(gamesService) {
    return {
        restrict: 'A',
        controler: "gameCtrl",
        link: function (scope, element) {
            var clock = new Clock();
            gamesService.initHours();
            scope.titre = gamesService.whichTime();
            clock.setTime(gamesService.hours, gamesService.minutes);
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
                console.log(gamesService);
                var time = element.parent().parent().find('.time');
                var value = time.html();
                value = gamesService.checkArrow(value, attrs, element);
                time.html(value);
            });
        }
    };
});