/*
Coding Exercise 10: Power

Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math . pow( )
- do not worry about negative bases and exponents.

*/

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

/*
Coding Exercise 11: Factorial

Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (O!) is always 1.

*/

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

/*
Coding Exercise 12: productOfArray

Write a function called product0fArray which takes in an array of numbers and returns the product of them all.
            
*/

function productOfArray(anArr) {
  if (anArr.length === 0) {
    return 1;
  }
  return anArr[0] * productOfArray(anArr.slice(1));
}

/*
Coding Exercise 13: recursiveRange

Write a function called recursiveRange which accepts a number and adds up all the numbers from O to the number passed to the function.

*/

function recursiveRange(num) {
  if (num === 0) {
    return num;
  }
  return num + recursiveRange(num - 1);
}

/*
Coding Exercise 14: fib

Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

*/

function fib(num) {
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

function reverse(string) {
  if (string.length <= 1) {
    return string;
  }
  return reverse(string.slice(1) + string[0]);
}

