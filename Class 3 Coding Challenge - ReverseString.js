/*  https://www.coderbyte.com/editor/First%20Reverse:JavaScript
    First Reverse
    Have the function FirstReverse(str) take the str parameter 
    being passed and return the string in reversed order. 
    For example: if the input string is "Hello World and Coders" 
    then your program should return the string sredoC dna dlroW olleH.
*/

const input = require("readline-sync");

function FirstReverse(str) { 
  let reverseStr;
  str = input.question("Enter a word or phrase to reverse:\n");
  reverseStr = str.split('').reverse().join('');
  str = reverseStr;
  return str; 
}
   
console.log(FirstReverse());