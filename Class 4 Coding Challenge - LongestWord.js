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