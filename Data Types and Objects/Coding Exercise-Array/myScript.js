
//array of objects for eBooks


var eBooks = [

  {title: "Crima si Pedeapsa", author: "Dostoyevski", readingStatus: false},
  {title: "Depression", author: "Habarn-am", readingStatus: true},
  {title: "Will to Power", author: "Friedrich Nietzsche", readingStatus: false}

];

//loop through eBook object properti4es & get the reading status

for ( var i=0; i < eBooks.length; i++) {

  var myBook = "" + eBooks[i].title + " " + "by" + " " + eBooks[i].author + " ";

  if( eBooks[i].readingStatus) {

    document.write( "Already read " + myBook + "<br>");

      }

      else {

        document.write( "Still need to read " + myBook + "<br>");


      }

    }
