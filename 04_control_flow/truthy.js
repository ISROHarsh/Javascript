// const userEmail = []

// if (userEmail) {
//     console.log("got the email");
// }
// else {
//     console.log("no email found")
// }

// Falsy Values - false, 0, -0, BigInt - On, "", null, undefined, NaN


// Truthy Values - true, "0", "false", " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("The Object is empty");
// }


// Nullish coalescing operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");