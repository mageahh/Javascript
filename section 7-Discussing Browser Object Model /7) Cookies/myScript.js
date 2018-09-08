//JS Cookies

//A cookie is a text file that is stored on the user's computer; some data is sent to the user in the form of a cookie
//The data contained in the cookie is automatically transmitted between the web browser and the web server
//With JS, we can create, read and delete Cookies

//CREATE COOKIES-simplest way is to assign a string value

document.cookie = "userFirstName=Maria;expires= Thu, 6 Sep 2018 12:00:00 UTC"; //if you don't specify the expiration date, the cookie is deleted when you close the browser

document.cookie = "userLastName=Andrei;expires= Thu, 6 Sep 2018 12:00:00 UTC";

//READ Cookies

alert(document.cookie);

//delete Cookies- you set the expiration date to a past date

document.cookie = "userFirstName=Maria;expires= Thu, 6 Sep 2017 12:00:00 UTC"; 
