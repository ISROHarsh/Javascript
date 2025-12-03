// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 34567891534567894532n


// Reference (Non Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman","hero: bhakti hi shakti  hai"]
let MyObj = {
    Name : "Harsh",
    Age : 18
}

const myFunc = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);
