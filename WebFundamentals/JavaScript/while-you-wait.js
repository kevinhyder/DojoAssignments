function whileYouWait(daysUntilMyBirthday) {
    var daysUntilMyBirthday = 60;

    while(daysUntilMyBirthday >= 0) {
        if(daysUntilMyBirthday == 0) {
            console.log("HAPPY BIRTHDAY!!!")
        }
        else if(daysUntilMyBirthday >= 30) {
            console.log(daysUntilMyBirthday, "days until my birthday. Such a long time... :(") 
        }
        else if(daysUntilMyBirthday >=5) {
            console.log("Only", daysUntilMyBirthday, "left until my Birthday!")
        }
        else if(daysUntilMyBirthday < 5) {
            console.log(daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!!!")
        }
        daysUntilMyBirthday = daysUntilMyBirthday - 1
    }
}
whileYouWait()