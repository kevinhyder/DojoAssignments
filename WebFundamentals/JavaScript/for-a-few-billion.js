//One month
function forAFewBillion() {
    var $forAFewBillion = 1;
    for( i = 1; i <= 30; i++) {
        $forAFewBillion *= 2;
    }
    console.log($forAFewBillion / 100);
}
forAFewBillion()

//Time to $10,000
function toTenThousand() {
    var $forAFewBillion = 1;
    for( i = 1; i <= 30; i++) {
        $forAFewBillion *= 2;
        if($forAFewBillion >= 1000000) {
            console.log(i)
            break;
        }
    }
    console.log($forAFewBillion / 100);
}
toTenThousand()

//Time to $1,000,000,000
function toBillion() {
    var $forAFewBillion = 1;
    for( i = 1; i <= Infinity; i++) {
        $forAFewBillion *= 2;
        if($forAFewBillion >= 100000000000) {
            console.log(i)
            break;
        }
    }
    console.log($forAFewBillion / 100);
}
toBillion()

//Time to Infinity
function toInfinity() {
    var $forAFewBillion = 1;
    for( i = 1; i <= Infinity; i++) {
        $forAFewBillion *= 2;
        if($forAFewBillion >= Infinity) {
            console.log(i)
            break;
        }
    }
    console.log($forAFewBillion / 100);
}
toInfinity()