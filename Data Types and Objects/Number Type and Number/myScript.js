//1)1st way to create number

var n = new Number(14);
document.write(n + "<br>");

//primitive value of object

document.write("Primitive Value: " + n.valueOf() +"<br>");


//2)ALTERNATE SYNTAX

var n = 15.5;

document.write(n + "<br>");

//Check whether a number is VALID

var numberCheck = 20 + "t";

document.write(numberCheck + " is not a valid number: " + isNaN(numberCheck) + "<br>");

//Converting a number to a string:STRING METHOD

var myNumber = 555;
document.write(myNumber.toString() + "<br>");
