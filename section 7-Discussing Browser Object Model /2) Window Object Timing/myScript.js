//You can specify the time when code is executed. There are 2 methods to make JS code execute at specified time intervals

function sayHelloToWorld () {

  alert("Hello World!");
}

//TIMEOUT method

//window.setTimeout(sayHelloToWorld, 5000); //the setTimeout method is not repeating itself

//setTimeout(sayHelloToWorld, 5000);

//if you wat to prevent this function execution of ther setTimeout method you can use the clearTimeout method, and we need to set the setTimeout method as a VARIABLE

//var spt1 = setTimeout(sayHelloToWorld, 4000);

//CLEARTIMEOUT method
//clearTimeout(spt1);

//setInterval method

var stp2 = window.setInterval(sayHelloToWorld, 2000); //it repeats the function execution at the given time in the argument

//CLEARINTERVAL METHOD

clearInterval(stp2);
