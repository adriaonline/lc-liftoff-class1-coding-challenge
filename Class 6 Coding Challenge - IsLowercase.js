/* https://edabit.com/challenge/rvsvGvqZ3BzNieKqA

What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
*/

// my notes:
// loop
// if islower add to variable

function detectWord(str) { 
  let strSplit = str.split('');
  let lcLetters = [];
  let lcWord;

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === strSplit[i].toLowerCase()) {
      lcLetters.push(strSplit[i]);
    }
  }
  lcWord = lcLetters.join("");
  return lcWord; 
}
   
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));