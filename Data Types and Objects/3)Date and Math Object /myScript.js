//DATA TYPES AND MATH OBJECT

var rightNow = new Date();
//alert(rightNow);

//milliseconds

var dt = new Date(5878999999855);
//alert(dt); //shows date in milliseconds from 01 Jan 1970

//date string

dt = new Date("October, 27, 1998");
//alert(dt);

//DATE WITH YEAR, MONTH, DAY, HOUR, SEC AND MILLISEC

dt = new Date(2003, 10, 27, 8, 45, 50, 3 );

//alert(dt);

//Date object with methods

var dtm = new Date();

//get DATE

document.write("Date: " + dtm.getDate() + "<br>");

//get DAY
document.write("Day: " + dtm.getDay() + "<br>");//Sunday starts at 0

//get MONTH
document.write("Month: " + dtm.getMonth() + "<br>");//Months are from 0-11 in JS

//get FULL YEAR
document.write("Full Year: " + dtm.getFullYear() + "<br>");//Months are from 0-11 in JS

//get HOURS
document.write("Hours: " + dtm.getHours() + "<br>");

//get MINUTES
document.write("Minutes: " + dtm.getMinutes() + "<br>");

//get SECONDS
document.write("Seconds: " + dtm.getSeconds() + "<br>");


//MATH OBJECT handles mathematical operations

//SQUARE ROOT

var sqr = Math.sqrt(55);

document.write("Square Root: " + sqr + "<br>");

//MIN

var min = Math.min(10, 20, 55, 33);

document.write("Minimum: " + )
