//Logica Operators

var studentAge = 25;
var studentGender = "F";


//Logical AND operator

if ( (studentAge >= 18) && (studentGender == "M")) {
  document.write("Student age is greater than or equal to 18 and student gender is male.");
}


//Logical OR Operator

if ( (studentAge >= 18) || (studentGender == "M")) {
  document.write("Student age is greater than or equal to 18 OR student gender is male.");
}

//Logical NOT Operator

if ( ! (studentAge > 18)) {
  document.write("Student Age is less than 18");
}
