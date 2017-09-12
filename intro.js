//hey
// var player_one = "penguin"; //yey
// var player_two = "panda";

// loops boops*
for (var i = 0; i < 1; i++) {
    
}
// what are things??
// pop-ups
// wait should i refresh or wag
// refresh i just fixed syntax errors
// okay I saw it na
//confirm("Hello"); // returns true or false
//alert("Warning!"); // a fucking message box
//prompt("What is your name","Name here"); // returns a value that can be stored;

// Everything can be stored in a variable and i mean everything
// oh dear
// wait can you showcase your code kanina in another file

var array = []; // array is dynamic, like as in mix of any var types pwede yep
var obj = {}; // what is this , an object instantiation
// :'( ok
// to add in array, ok!
array.push("1");
array.push(true);
array.push(1);

// for objects 
// you don't even have to declare attributes?
// yep pero if you want to
obj.name = "Boopy";
obj.age = 18;


// Constructor Functions (objects)
var car = {}; // kailangan pa ba nito?
// if you want a normal object
function Car(color, milage){
    this.color = color;
    this.milage = milage;
    this.drive = function(distance){
        this.milage += distance;
    }
}

// if you want a new Car
var car = new Car("blue",0);
car.drive(100);
// to call the method/ function called drive
// yes
console.log(car.milage);
// ok gets ko!
// press f12 dun sa page to see if it works go to console
// what do you mean. Okay! I saw 100 weeee

// there are two ways of writing functions in javascript
// first
console.log(add(1,2)); // will work right?
//console.log(mult(1,2)); // this wont work
var mult = function(num1,num2){
    return num1 * num2;
}
// second
function add(num1, num2){
    return num1 + num2;
}

// Difference between first one and second one is that for the first one you have to write it first before you can
//use it. 
// yeh what iz the dif
// ahhh so like i cannot call mult before i wrote it, but i can call add beforehad
// take a look sa console haha
// saw it na


// if statements
var number = 11; // triple talaga?
// double works but it is frowned upon
// whyyyyyy
//  == tries to convert types before comparing
// === doesnt
// ok :(
if (number === 11) {
    
} else {
    
}


