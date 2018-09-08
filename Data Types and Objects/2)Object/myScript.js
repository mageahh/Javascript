//JavaScript Objects

//there are 3 ways to create objects in JS


//1)USING NEW KEYWORD

var person = new Object(); //person became an object now

//Adding a PROPERTY to the Object

person.firstName = "Maria";
person.lastName = "Andrei";
person.age = 19;
person.height= 5.5;
//METHOD: FUNCTION THAT CREATES A DIFFERENT PROPERTY TO THE OBJECT

person.fullName = function () {

  return ( person.firstName + " " + person.lastName );


}

//HOW TO ACCESS THE PROPERTY OF AN OBJECT:
// 1st Way

//alert(person.firstName);

//2nd way

//alert(person["age"]);

//HOW TO ACCESS METHOD

//alert(person.fullName());


//2)USING AN OBJECT CONSTRUCTOR

function Person(fName, lName, age, hg) {

 this.firstName = fName;
 this.lastName = lName;
 this.age = age;
 this.height = hg;

 this.fullName = function(){

   return (this.firstName + " " + this.lastName);

 }

}

//by using the NEW keyword we can create as many objects as we want

/*var myBrother = new Person("Flavian", "Alexandru", 25, 5.9);
var myMother = new Person("Lilieana", "Andrei", 51, 5.7);

alert(myBrother.firstName);
alert(myBrother.fullName());

alert(myMother.firstName);
alert(myMother.fullName());*/

//create an object using an OBJECT LITERAL

var person = {
firstName : "Maria",
lastName : "Andrei",
age: 19,
height: 5.5,
fullName: function () {

  return(this.firstName + " " + this.lastName);

}

};

/*alert(person.firstName);
alert(person["age"]);
alert(person.fullName());*/


//Objects are changeable

var x = person; //this does not create a new copy of this object; both variables x and person belong to the same object

 //if we make any changes to the object x, the same changes will be applied to the object person

 x.firstName = "John";

 //alert(x.firstName);
 //alert(person.firstName);

 //you can delete the propertiees of an object

 delete person.age; //this will delete both property name and value

 alert(person.age);



//USING FOR INLOOP

var myCar = {
 name: "BMW",
 year: 2016,
 color: "Black"
};

var v = "";
for(var k in myCar) {
 v = v + myCar[k] + " ";
}

alert(v);

//NESTED OBJECTS

var user = {
  name: "Russel",
  age: 25,
  size: {
    top: 90,
    middle:65,
    bottom:94
  }
};

alert(user.name);
alert(user.size.top);
