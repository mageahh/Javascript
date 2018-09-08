//Function with parameters

function functionWithParameters(p1, p2) {

  var z = p1 * p2;

  document.write("p1 * p2 =" + z + "<br>");
}

//function call with argument


functionWithParameters( 10, 20);


//using another function as the argument

function parameterAsFunction ( func ) {

  func();

}

parameterAsFunction(helloWorld);

function helloWorld() {

  alert("Hello! Function has now passed as argument!");
}

//function with RETURN STATEMENT

function returnSum (x, y) {

  var z = x + y;

  return z
}

/*var result = returnSum (20, 30);

document.write("Returned value:" + result);*/


//Function AS VALUES

document.write("Returned value:" + returnSum(20, 30));
