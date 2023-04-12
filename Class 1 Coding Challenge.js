const input = require("readline-sync");

function triangleArea(base, height) {

    console.log("Let's calculate the area of a triangle!\n");
    base = input.question("What is the length of the triangle's base: ");
    height = input.question("What is the length of the triangle's height: ");
	
	//this does not test the responses to make sure they are greater than 0
   
    return (base * height) / 2;
}

console.log("The triangle's area is " + triangleArea() + ".");