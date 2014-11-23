app.service('gamesService', function () {
    return {
        hours: 0,
        minutes: 0,
        response: null,
        showPopup: false,
        clock: null,

        startGame: function(){
            this.clock = new Clock();
            this.initHours();
        },
        //init hours ramdomly
        initHours: function() {
            this.hours =  _.random(0,23); 
            this.minutes = Math.floor(Math.random()*11)*5;
            this.response =  {hours: 0, minutes: 0}
        },
        //check if is top or bottom arrow
        //return integer
        checkArrow: function(value, attrs, element) {
            if(element.hasClass('arrow-top')){
                value ++;
            }else {
                value--;
            }
            return this.checkType(attrs.switch, value);
        },

        hoursToString: function(){
            return this.hours+':'+this.minutes;
        },

        //check if is hours or minutes 
        //return integer
        checkType: function(type, value){
            if(type == "hours") {
                if(value > 23 ){
                    value = 0;
                }else if(value < 0){
                    value = 23;
                }
                this.response.hours = value;
            }else{
                if(value > 59 ){
                    value = 0;
                }else if(value < 0){
                    value = 59;
                }
                this.response.minutes = value;
            }
            return value
        },

        //check if is morning/afternoon 
        //return string
        whichTime: function(){
            if(this.hours >= 12 && this.hours <= 17){
                return "Après midi";
            }else if(this.hours >= 1 && this.hours <= 11){
                return "Matin";
            }else{
                return "Soir";
            }
        },

        //check if is win
        //return boolean
        win: function(){
            this.showPopup = true;
            if(this.response.hours == this.hours && this.response.minutes == this.minutes) {
                return true;
            }else{
                return false;
            }
        },

        resetGame: function(){
            this.showPopup = false;

        }
    }
});