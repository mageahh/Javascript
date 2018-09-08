//BREAK and CONTINUE Statements

//BREAK

document.write(" BREAK: <br>");

var i;

for (i = 0; i <= 10; i++) {

  if ( i == 7 ) {

    break;
  }

  document.write( i + "<br>");
}

//CONTINUE

document.write(" CONTINUE: <br>");

var z;

for ( z = 0; z <= 10; z++) {

   if ( z == 5) {

     continue;
   }

  document.write( z + "<br>");
}
