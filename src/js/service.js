app.service('gamesService', function () {
    return {
        hours: 0,
        minutes: 0,
        initHours: function() {
            this.hours =  _.random(0,23); 
            this.minutes = Math.floor(Math.random()*11)*5;
        },

        gamesMoyenne: function() {
            return Math.round((this.gamesScores.memory + this.gamesScores.interro + this.gamesScores.math) / this.nbPlayed)
        },

        generatePartage: function() {
            return {
                        "twitter": "https://twitter.com/share?url=" + this.url+ "share/"+authorizationService.currentUser.id,
                        "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + this.url+"share/"+authorizationService.currentUser.id,
                        "mail": "mailto:?subject=partage Acer a Touch of school&body="+ this.url+"share/"+authorizationService.currentUser.id
                    }
        }
    }
});