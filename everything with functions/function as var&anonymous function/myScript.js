//Javascript Function as Variables & Anonymous Functions

function sum(x, y) {

   return (x + y);

}

var s = sum;

var r = s(10, 20);

 document.write(r + "<br>");


 //Anon Function

 var isAdult = function(age) {

   if ( age >= 18) {

     return "Yes";

   } else {

     return "No";
   }

 };

 var k = isAdult(16);

 document.write("Adult Status: " + k);
