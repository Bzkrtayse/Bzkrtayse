let name= 'aysha';
console.log(name);
//can not be a reserved keyword such as let, if, else etc.
//should be meaningful
//can not start with a number
//can not contain space or hyphen
//case-sensetive

//these are 2 different variable
let firstName ='aysha';
let FirstName ='aysha';

// let can change but constant no. when u don't want things to change use constant element..
const age= '19';
console.log(age); 
// const can't be assigned more than once


//primitive types/valuable
let surname = 'bozkurt'; // that's a string literal
let height = 170; // Number Literal
let solution = false; // Boolean Literal
let secondname = undefined; 
let selecteduni = null; //null

var myname = 'ayse'
const pi = 3.14 


//reference types

//1- OBJECTS 
let person = {
    name: 'aysha',
    age: 19, 
};

//2- ARRAYS
let selectColor = ['purple', 'pink', 'yellow'];
console.log(selectColor[2]);

var ourArray = [['this is an array in another array'], 23, 'YAH'];
ourArray[1] = 90; //ourArray now equals [[sth],90,...];
var ourData = ourArray[1]; //equals 23
var ourdata = ourArray[0][0];

ourArray.push(['happy','dog']);//will be added in our array as an array

var removed
fromOurArrya = ourArray.pop();

// .shift similar to pop .unshift similar to push

//ARRAY METHODS
const items = [
    {name: 'bike' ,     price: 100   },
    {name: 'tv' ,       price: 200   },
    {name: 'album' ,    price: 10    },
    {name: 'book' ,     price: 5     },
    {name: 'phone' ,    price: 500   },
    {name: 'computer' , price: 1000  },
    {name: 'keyboard' , price: 25    },
]

//filter 
const filteredItems = items.filter((item) =>{
    return item.price <= 100
} ) 


console.log(items)
console.log(filteredItems)

// map
// find
// forEach
// some
// every
// reduce
// includes

//3- FUNCTIONS
function greet(name) {
    console.log('Hello ' +  name)
}
greet('sebo')
greet('mecit')


















