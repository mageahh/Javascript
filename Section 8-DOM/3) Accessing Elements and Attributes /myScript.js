//JS Accessing elements and attributes using document object

//Acces an element using getElementById

var hElement = document.getElementById("my-heading");

/*alert(hElement); //returns a js DOM object-the dom object of the html heading: it shows elements and a number of properties
//once you have the object, you can view the properties and call the methods

//get DOM object value - such as the text contained in the heading

alert(hElement.innerHTML);

/* Inner Html Property

-it returns the html contained in an html elements

// GET ATTRIBUTE METHOD

alert(hElement.getAttribute("id"));

//get tag name
alert(hElement.tagName);*/

//ACCES HTML ELEMENT BY USING CLASS ATTRIBUTE

var pElements = document.getElementsByClassName("my-paragraph"); //it returns a collection of objects: a NodeList
//alert(pElements);

//we can use an index on that collection to get the desired element

//alert(pElements[0]);

//how to get the html contained in the specific paragraph, we can use the innerHTML method on the object

//alert(pElements[0].innerHTML);

//we can also use getAttribute and tagName on this DOM object

//how to loop through all the P elements inside the collection:

for(var i = 0; i < pElements.length; i++) {

  alert(pElements[i].innerHTML);

};
