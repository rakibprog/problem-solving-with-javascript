//Leap Year

function isLeapYear(year) {

    if (year % 4 == 0) {
        return true;
    }

    return false;
}

const years = 2024;
const leapYear = isLeapYear(years);
console.log('This Is Leap Year', leapYear);

// Not leap Year

function notLeapYear(year) {
    if (year % 4 != 0) {
        return true;
    }
    return false;
}

const yearss = 2021;
const notYear = notLeapYear(yearss);
console.log('This is Not Leap Year', notYear);

// program check to leap year 

function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap Year');
    } else {
        console.log(year + ' is a not Leap Year')
    }
}

checkLeapYear(2021);