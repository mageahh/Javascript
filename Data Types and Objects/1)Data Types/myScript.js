// JavaScript Data Types and Objects

//JS is a dynamic language

var a = 10;

//alert ( typeof (a) );

a = "Maria";

//alert( typeof (a) );


/* PRIMITIVE DATA TYPES
-------------------------

1. string   //hello
2. number   // 50
3. boolean  //true or false
4. null     //no value
5. undefined  //undefined

*/

/*var s = "hello";
var n = 50;
var b = false;
var x = null;
var y = undefined;*/

//alert( typeof (b) );


/* NON-PRIMITIVE DATA TYPES
------------------------------

1.Object
2.Array
3.RegExp
4.Function
5.Date

*/


/*var employee = new Object();   //represents an instance of an Object and through this instance the properties of the object are accessed
var books = new Array();       // represents group of similar values
var reg = new RegExp();        // represents a regular expression used for searching purposes
var myFunc = new Function();
var todayDate = new Date();*/


//The first 3 Primitive Data Types have their corresponding object constructors

//String as Primitive data type

var s ="hello!";
alert( typeof (s));

/*STRING as an object
 ---------------------*/

 var s = new String("hello!");
 alert( typeof (s));
