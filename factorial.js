 // Factorial Number
 // 7! = 7 x6x5x4x3x2x1  factorial method

 var factorial = 1;
 for (let i = 1; i <= 7; i++) {
     factorial = factorial * i;
 }

 console.log(factorial);

 // factorial using function

 function factorial(fact) {
     var factorialValue = 1;
     for (let i = 1; i <= fact; i++) {
         factorialValue = factorialValue * i;
     }
     return factorialValue;
 }

 var result = factorial(8);
 console.log('factorial of 8 is', result);

 var resultTwo = factorial(10);
 console.log('factorial  of 10 is', resultTwo);


 Factorial using a
 while loop or a decrementing loop

 function factorial(number) {
     let fact = 1;
     let i = 1;
     while (i <= number) {
         fact = fact * i;
         i++;
     }

     return fact;

 }

 var result = factorial(10);
 console.log(result);

 function factorial(number) {

     let fact = 1;
     let i = number;
     while (i >= 1) {
         fact = fact * i;
         i--;
     }
     return fact;
 }

 var result = factorial(10);
 console.log(result);