function tellTime(HOUR, MINUTE, PERIOD) {
    var HOUR = 7;
    var MINUTE = 15;
    var PERIOD = "PM";

    if(PERIOD === "AM") {
        if(MINUTE < 30) {
            console.log("It's just after", HOUR, "in the morning.")
        }
        else {
            console.log("It's almost", (HOUR + 1), "in the morning.")
        }
    }
    else {
        if(MINUTE < 30) {
            console.log("It's just after", HOUR, "in the evening.")
        }
        else {
            console.log("It's almost", (HOUR + 1), "in the evening.")
        }
    
    }

}   
tellTime()