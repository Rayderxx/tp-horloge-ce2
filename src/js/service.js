app.service('gamesService', function () {
    return {
        hours: 0,
        minutes: 0,
        response: null,

        initHours: function() {
            this.hours =  _.random(0,23); 
            this.minutes = Math.floor(Math.random()*11)*5;
            this.response =  {hours: 0, minutes: 0}
        },

        checkArrow: function(value, attrs, element) {

            if(element.hasClass('arrow-top')){
                value ++;
            }else {
                value--;
            }
            return this.checkType(attrs.switch, value);
        },

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

        whichTime: function(){
            if(this.hours >= 12){
                return "Après midi";
            }
            return "Matin";
        }
    }
});