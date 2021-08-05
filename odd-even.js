// Even number 
// note number divide by 2 and modulas 2 
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

var numberEven = isEven(100);
console.log('This Number is Even:', numberEven);

// Odd Number 
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
var numberOdd = isOdd(101);
console.log('This Number is Odd:', numberOdd);