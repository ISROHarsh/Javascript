// if

const isUserLoggedIn = true

if (isUserLoggedIn) { // the condition should be true then only the if scope executes

}

// <, >, <=, >=, ==, !=, ===

// const balance = 1000
// if (balance > 500) console.log("test");

const balance = 1000
// if (balance > 500) console.log("test"),
// console.log("test2");

// if (balance < 500) {
//     console.log("The balance is less than 500");
// }
// else if (balance < 750) {
//     console.log("The balance is less than 750");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) { // && this represent AND
    console.log("Purchase could be done");
}

if (loggedInFromEmail || loggedInFromGoogle) {  // || this represents OR
    console.log("User is logged in");
}