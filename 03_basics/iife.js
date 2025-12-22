// Immediately Invoked Function Expression (IIFE)


(function chai() {
    // This is a named IIFE
    console.log(`DB CONNECTED`);
})();

// ()()
// This creates a immidiate execution of the function
// Sometimes to remove the pollution occured due the global scope, IIFE is used

( (name) => {
    console.log(`DB CONNCETED ${name}`);
})("Harsh");

