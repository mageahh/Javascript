//JavaScript Self Executing Anonymous Functions


//self exec anon Func

(function() {

  alert("Auto show up message");
})();



 //Alternative syntax


 (function() {

   alert("Auto show up message 2");
 }());


// you can pass arguments and parameters to anon self exec Functions

(function (x, y) {

  alert("Sum of x & y is: " + (x + y));
})(40, 50);


//Self executing function with return


var sum = (function (x, y){

  return (x + y);
})(40, 30);

alert("Returned sum: " + sum);
