/*REGULAR EXPRESSIONS & FUNCTION Object

Create RegExp using:*/

//1)THE NEW KEYWORD

var regExp1 = new RegExp("adcb");

//2)ALTERNATICE SYNTAX:

var regExp2 = /adb/;

var strToSearch = "This adcb is a bank name ";

regExp2.test(strToSearch); //this TEST METHOD will look for the RegExp2 aka adcb in the string inside the variable strToSearch

//if the TEST METHOD finds the regexp inside the string, it returns true; if not, it returns false

//we need to create a new varianle to return the result

var matchFound = regExp2.test(strToSearch);

alert(matchFound);

//FUNCTION OBJECT

var functionAsObject = new Function("a","b", "return a + b");

var x = functionAsObject( 50, 45);

alert(x);

//ALTERNATE FIUNCTION SYNTAX

var y = function(a, b) {return (a + b)};
alert(y(45,60));
