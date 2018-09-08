//JavaScript ARRAY OBJECT

//HOW TO CREATE AN ARRAY:

//1) using NEW keyword

var myColors = new Array("Red","Green","Blue");

document.write(myColors[2] + "<br>");

//2)ALTERNATSIVE WAY WITH []

var myColors = ["Red", "Green", "Blue", "Pink"];

document.write(myColors[0] + "<br>");

//how to MODIFY an Array Element

myColors[1] = "Yellow";
document.write(myColors[1] + "<br>");

//How to Display All Elements

document.write(myColors + "<br>");

//How to Find the LENTGH of an Array

document.write(myColors.length + "<br>");

//sort and Array alphabetically

document.write(myColors.sort() + "<br>");

//REVERSE the Array

document.write(myColors.reverse() + "<br>");

//We use the PUSH METHOD to add an element

myColors.push("Purple");
document.write(myColors + "<br>");

//We use the POP METHOD to REMOVE an element from the array

myColors.pop("Blue");
document.write(myColors + "<br>");

//Join 2 or more arrays

var listOfNumber1 = [1, 2, 3 , 4];
var listOfNumber2 = [5, 6, 7 , 8];

var allNumbers = listOfNumber1.concat(listOfNumber2);
document.write(allNumbers + "<br>");



//How to LOOP through the elements of an Array using FOR

var myCars = ["BMW", "RollsRoyce", "Bentley"];

for(var i = 0; i < myCars.length; i++) {

document.write(myCars[i] + "<br>");

}

//How to Create an ARRAY OF OBJECTS

var myCars = [

  { model: "BMW", year: 2017 },
  { model: "RollsRoyce", year: 2008},
  { model: "Bentley", year : 2018 }
]

for( var k=0; k < myCars.length; k++) {

  var myCar="";

  for (var cp in myCars[k] ) {

    myCar = myCar + myCars[k][cp];

    document.write(myCar + "<br>" );
  }


}
