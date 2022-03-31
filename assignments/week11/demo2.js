let myVariable;
myVariable = 'Bob';

//variables
let myStr = 'Bob'; //string
let myNumber = 3; //numbers - don't need to declare variable type
let myBool = true; //bools
let myArr = [1, 'bob', true] // array - can hold different types of data types in same array
let myObject = document.querySelector('p'); //objects, all of the above are objects too

//operators
6+8; //addition
'hello' + 'world'; //string addition
//subtraction, multplication,division

//assignment: =, equality: ===
//equality
myNumber === 4; // returns false

!(myNumber === 3); not true
myNumber !== 3; //false


//conditionals (if else, while, etc)
let iceCream = 'chocolate';
if(iceCream === 'chocolate'){
  alert('yes');
} else{
  alert('no');
}

//event listeners
document.querySelector('html').addEventListener('click', function(){
  alert('stop');
});
