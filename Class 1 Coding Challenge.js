/* 
	https://edabit.com/challenge/3CaszbdZYGN4otQD8
	Area of a Triangle
	Write a function that takes the base and height of a triangle and return its area.
	
	Examples
	triArea(3, 2) ➞ 3
	triArea(7, 4) ➞ 14
	triArea(10, 10) ➞ 50
	
	Notes
	The area of a triangle is: (base * height) / 2
	Don't forget to return the result.
	If you get stuck on a challenge, find help in the Resources tab.
	If you're really stuck, unlock solutions in the Solutions tab.
*/

const input = require("readline-sync");

function triangleArea(base, height) {

    console.log("Let's calculate the area of a triangle!\n");
    base = input.question("What is the length of the triangle's base: ");
    height = input.question("What is the length of the triangle's height: ");
	
	//this does not test the responses to make sure they are greater than 0
   
    return (base * height) / 2;
}

console.log("The triangle's area is " + triangleArea() + ".");
