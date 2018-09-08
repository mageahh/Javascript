//JavaScript Boolean Type and Boolean Value

//Creating Boolean Objects- 2 ways

//1)USING NEW KEYWORD

var b = new Boolean(true);
document.write(b + "<br>");

//Finding the Primitive Value

document.write(b.valueOf() + "<br>");

//2)ALTERNATE SYNTAX

var x = true;
var y = false;

//Converting ther Boolean object to String

var z = x.toString();

document.write(z + "<br>");

//Booleans are usually used in condition testing, while performing comparisons

//Conditional statements

//the boolean statement true will make the code inside the if statement true as well, and it will be executed

if(true) {

  document.write("Condition in a true state <br>");

 }

 if(false) {

   document.write("Condition in a false state  <br>");

  }

  //You can replace TRUE/FALSE with 1/0

  if(1) {

    document.write("Condition in a 1/true state <br>");

   }

   if(0) {

     document.write("Condition in a 0/false state <br>");

    }

    //You can always replace them with a TRUE or a FALSE statement in the IF


    if( 2 < 3) {

      document.write("2 is less than 3 <br>");

     }
