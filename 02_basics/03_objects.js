// singleton - if objects are created from constructers than a singleton is formed which is not the case in literal form 
// Object.create() - The Constructer Method

const mySym = Symbol("key1")

// object literals
const JsUser = {
    name : "Harsh",
    [mySym] : "myKey1", // as Symbol datatype is our requirement not a string
    age : 18,
    location : "India",
    email : "random@gmail.com",
    isLoggedIn : false,
    lastLoggedDay : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // the email was stored as a string so this specification 

// console.log(JsUser[mySym]);

JsUser.email = "random@outlook.com"
// Object.freeze(JsUser)
JsUser.email = "random@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hellow JsUser");
}

JsUser.greetingTwo = function(){
    console.log(`hellow JsUser, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
