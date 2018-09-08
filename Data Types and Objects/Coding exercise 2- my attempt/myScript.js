// create an array of objects
var myFavouriteBands = [
  {name: "Steven Wilson", album: "HandCannotErase", song: "Ancestral"},
  {name: "Opeth", album: "Damnation", song: "Windowpane"},
  {name: "Pink Floyd", album:"DarkSideoftheMoon", song: "Time"}
];

//create for loop to display one property

for (i = 0; i<myFavouriteBands.length; i++) {

  var band = " ";

  for (k in myFavouriteBands[i]) {

    band = band + myFavouriteBands[i][k] + "<br>";
  }

  document.write(band + "<br>");


}
