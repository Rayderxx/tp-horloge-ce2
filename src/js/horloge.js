var Clock = function() {
    var _self = this;
    var stage;
    var layerClock;
    var layerHour;
    var layerMinute;
    var imageClock = new Image();
    var imageHour = new Image();
    var imageMinute = new Image();

    _self.construct = function() {
        _self.init();
    };

    _self.init = function() {
        stage = new Kinetic.Stage({
            container: 'game',
            width: 300,
            height: 300
        });

        layerClock = new Kinetic.Layer({
            x: 0,
            y: 0,
            width: 300,
            height: 300
        });
        layerHour = new Kinetic.Layer({
            x: 149.5,
            y: 145,
            width: 6,
            height: 55
        });
        layerMinute = new Kinetic.Layer({
            x: 149.5,
            y: 145,
            width: 6,
            height: 75
        });

        imageClock.onload = function() {
            var clock = new Kinetic.Image({
                image: imageClock,
                width: 300,
                height: 300
            });
            layerClock.add(clock);
            layerClock.draw();
        }

        imageHour.onload = function() {
            var hour = new Kinetic.Image({
                image: imageHour,
                x: -3,
                y: -55,
                width: 6,
                height: 55
            });
            // hour.setScale({y:-1});
            layerHour.add(hour);
            layerHour.draw();
        }

        imageMinute.onload = function() {
            var minute = new Kinetic.Image({
                image: imageMinute,
                x: -3,
                y: -75,
                width: 6,
                height: 75
            });
            // minute.setScale({y:-1});
            layerMinute.add(minute);
            layerMinute.draw();
        }

        imageClock.src = 'img/clock1.png';
        imageHour.src = 'img/secondHand.png';
        imageMinute.src = 'img/firstHand.png';
        stage.add(layerClock, layerHour, layerMinute);
    };
    _self.onChangeClock = function(clock) {
        imageClock.src = 'img/' + clock + '.png';
    }
    _self.setTime = function(hour, minute) {
        var tmpHour = hour > 12 ? hour - 12 : hour + minute / 60;
        var degHour = tmpHour * 360 / 12;
        var degMinute = minute * 360 / 60;
        _self.onRotateHour(degHour);
        _self.onRotateMinute(degMinute);
    }
    _self.onRotateHour = function(deg) {
        layerHour.rotate(deg);
        layerHour.draw();
    };

    _self.onRotateMinute = function(deg) {
        layerMinute.rotate(deg);
        layerMinute.draw();
    };

    _self.construct();
};  