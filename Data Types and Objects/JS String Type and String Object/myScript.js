//JS String Type and String Object

//Create strings:

//1)USING THE NEW KEYWORD

var ss = new String("This is America");

document.write(ss + "<br>");

var s = "This is USA";
document.write(s + "<br>");

//Add SPECIAL CHARACTERS into string

var myString = "This is \"vanilla\" icecream";
document.write(myString + "<br>");

var myString = "This is \'vanilla\' icecream";
document.write(myString + "<br>");

var myString = "This is \\vanilla\\ icecream";
document.write(myString + "<br>");

//string object properties and methods

var myQuestion = "Where do you live?";

//LENGTH of a string

document.write( "Length: " + myQuestion.length + "<br>");

//INDEX of

document.write("Index Of: " + myQuestion.indexOf("you") + "<br>");

//you can SUBTRACT a substring

document.write(myQuestion.substring(6, 12) + "<br>");

//REPLACE string

document.write(myQuestion.replace("live", "go") + "<br>");

//UPPERCASE

document.write(myQuestion.toUpperCase() + "<br>");

//lowercase

document.write(myQuestion.toLowerCase() + "<br>");

//You can also find the character at a specific index

document.write(myQuestion.charAt(2) + "<br>");
