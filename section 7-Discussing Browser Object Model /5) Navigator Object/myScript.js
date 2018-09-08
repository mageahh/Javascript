//JS Navigator Object

/* used for user's browser detection: it can get browser information, because it holds information about the browser

-it's also the child of the window object:

WINDOW:  -screen
         -history
         -navigator */


//How to check if cookies are enabled in the browser
document.write("Cookies Enabled: " + window.navigator.cookieEnabled + "<br>");

//cookies are small pieces of data sent from websites and they are stored in the user's browser while the user is browsing

//Get the Browser's Name, version and code

document.write("Browser's name: " + navigator.appName + "<br>" +

               "Version: " + navigator.appVersion + "<br>" +
               "Code Name: " + navigator.appCodename + "<br>" +
               "Platform: " + navigator.platform + "<br>" +
               "Language: " + navigator.language + "<br>" +
               "Java Enabled: " + navigator.javaEnabled()



);
