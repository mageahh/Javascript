// JS Window History Object
/*

-Window  --> parent
        -screen
        -history = history of pages/URLs visited by the user

        */

        //find the number of URLs visited by the user

        document.write("User History length: " + window.history.length + "<br>");

  //load previous URL from the History List
  history.back();

//load the forward URLs
history.forward();

//GO METHOD- forward or backward

history.go(2);
history.go(-2);
