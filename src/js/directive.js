app.directive('horloge', function(gamesService) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            var clock = new Clock();
            clock.setTime(gamesService.hours, gamesService.minutes);
        }
    };
});

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