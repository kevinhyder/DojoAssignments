function randomChance(quarters) {
    
        var win = Math.floor((Math.random() * 100 ) + 1);
        var winnings = Math.floor((Math.random() * 50 ) + 51);
        var loss = "You have no quarters left!";

        if(quarters == 0) {
            console.log(loss)
            return loss;
        }
        while(quarters > 0) {
            if( win == 100 ) {
                quarters--;
                quarters += winnings;
                console.log(quarters)
                return quarters;    
            }
            else {
                quarters--;
                console.log("You have", quarters, "quarters left.")
            }
        }
}
randomChance(100)