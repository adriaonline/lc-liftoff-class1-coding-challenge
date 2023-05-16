/* https://www.coderbyte.com/editor/Longest%20Word:JavaScript
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/

const input = require("readline-sync");

function LongestWord(sen) {
  sen = input.question("Enter words or a phrase to determine the longest word:\n");
  sen = sen.replace(/[^\w ]/g, '');
  let arr = sen.split(' ');

  let longer = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longer.length) {
      longer = arr[i];
	    sen = longer;
    }
  }
  return sen; 
}
   
console.log(LongestWord());
