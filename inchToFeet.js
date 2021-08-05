function inchToFeet(inces) {

    var total = inces / 12;
    return total;
}

var nani = inchToFeet(500);

console.log(nani);

var nana = inchToFeet(600);

console.log(nana);

var mama = inchToFeet(700);

console.log(mama);

// Miles To kilometer 

function MilesToKilometer(miles) {

    var km = miles * 1.60934;
    return km;
}

var total = MilesToKilometer(20);
console.log("Miles To Kilometer", total);