function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    
}

// sayMyName()

// function addTwoNum(num1, num2) { //(num1, num2) - parameters
//     console.log(num1 + num2);  
// }

function addTwoNum(num1, num2) {
//     let result = num1 + num2
//     return result  
       return num1 + num2
}

const result = addTwoNum(3, 5) // (num1, num2) - arguments

// console.log(`Result: ${result}`);

function loginUserMessage(username = "sam") { // if any other args then that use or sle sam
    if(username === undefined){ // also could be just represented by !username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harsh"));
// console.log(loginUserMessage());



function calculateCartPrice(...num1) { // here this spread operator is called as rest
    return num1
}

// console.log(calculateCartPrice(100, 200, 300));

const user = {
    username : "Harsh",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "Harsh",
    price : 399
})

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
