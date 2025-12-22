const user = {
    username : "Harsh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to website`); //this refers to current cntxt
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Harsh"
//     console.log(this.username); // this isn't working  in func, works in obj
// }

// chai()

// const chai = function(){
//     let username = "Harsh"
//     console.log(this.username); 
// }

const chai = () => { // Arrow function denotion
    let username = "Harsh"
    console.log(this); 
}

// chai()

// const addTwo = (num1, num2) => {        // in braces return likho, in () no return req
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2) //this  is implicit return ( one like return)

const addTwo = (num1, num2) => ({username : "Harsh"}) //() used to return the object

console.log(addTwo(3,5));


const myArray = [2,5,6,7,8]

myArray.forEach(() => {})