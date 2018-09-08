//FUNCTIONS and SCOPES

//global Scope

var x = 20;

function myFunction() {

  alert("x = " + x + "  Accessed inside the fucntion");
}
myFunction();

alert("x = " + x + "  Accessed outside the fucntion");

//Local Scope

function myFunction2() {

  var y = 99;

  //document.write("y = " + y + "  Accessed inside of a function");
}

myFunction2();

  //document.write("y = " + y + "  Accessed outside of a function");

//automatically global variables

function myFunction3() {

  z = 100;

  document.write("z = " + z + "  Accessed inside of a function");

  }
myFunction3();

document.write("<br>");

document.write("z = " + z + "  Accessed outside of a function");
