//JavaScript Window Object

//all properties and functions are part of the Global Window Object

//global variable

var x = 15; //this variable becomes part of the global window object
//alert(window.x);

//global function

function y() {


  document.write("Global function invoked using window object. <br>");

}
//window.y();

//alert("Alert invoke without using the window object");
//window.alert("alert invoke using the window object.");

/*window.confirm("confirm invoke using the window object");
window.prompt("prompt invoke using the window object");*/


//WIDTH and HEIGHT of the Browser

//INNER MEASUREMENTS:

//WIDTH

document.write(" Window inner width: " + window.innerWidth + " in pixels <br>");

//HEIGHT

document.write(" Window inner Height : " + window.innerHeight + " in pixels <br>");


//OUTER MEASUREMENTS- INCLUDE SCROLLNAR AND TOOLBAR

document.write(" Window outer width: " + window.outerWidth + " in pixels <br>");

document.write(" Window Outer Height: " + window.outerHeight + " in pixels <br>");


//set WINDOW NAME

window.name= "Maria Ardei";
document.write(window.name);


//close a Window

//window.close();

//open a new window

var udemyWindow = window.open("https://www.udemy.com", "Udemy Window", "width=150, height=150");

// we can also resize the new window, and for that we need to make it a variable=> the "var" was added now, after the first line of code

//resize to
udemyWindow.resizeTo(250,250);


// we can also move the new window to certain coordinates

udemyWindow.moveTo(350,500);

//Some properties of the Window Object are self objects

/*window.document
  window.screen
  window.navigator
  window.history
  window.location
