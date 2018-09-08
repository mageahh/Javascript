var classTemperature = 90;

//simple-if

/*if ( classTemperature == 100) {
  classTemperature = classTemperature - 20;
  document.write("Class temperature just changed to " + classTemperature + "<br>");
}

document.write ("Outside of if statement");*/

//IF ELSE STATEMENT

/*if ( classTemperature == 100) {
  classTemperature = classTemperature - 20;
  document.write("Class temperature just changed to " + classTemperature + "<br>");

} else {
  document.write("No need to change class temperature");
}*/

//IF... ELSE IF...ELSE

/*if ( classTemperature == 100) {
  classTemperature = classTemperature - 20;
  document.write("Class temperature just changed to " + classTemperature + "<br>");

} else if ( classTemperature == 90) {

  classTemperature = classTemperature - 10;
  document.write("Class body temperature just changed to " + classTemperature + "<br>");
} else {
  document.write("No need to change class temperature");
}*/

var classTemperatureStatus = ( classTemperature == 100) ? classTemperature - 20 : classTemperature;

document.write("Class current Temperature is " + classTemperatureStatus + "<br>");
