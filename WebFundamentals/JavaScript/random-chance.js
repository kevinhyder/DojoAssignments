function randomChance(quarters) {

    for( var i = quarters; i > 0; i-- ) {
        var win = Math.floor( (Math.random() * 100 ) + 1);
        var winnings = Math.floor(Math.random() * 50 ) + 51;
        var loss = 0;

        while(quarters > 0) {
            if( win == 1 ) {
                quarters = quarters + winnings;
                console.log(quarters)
                return quarters
                
            }
            else {
                quarters--
            }
        }
        if( quarters == 0 ) {
            console.log(loss)
            return loss
            
        }
    }
}
randomChance(50)