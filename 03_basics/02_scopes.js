var c = 300
let a  = 300

if (true) {
let a = 10
const b = 20
var c = 30
// console.log(`Inner: ${a}`);
}


// console.log(a);
// console.log(b);
// console.log(c);

// scope in the code env is diff than the ones in the inspect element web page

function one() {
    const username = "Harsh"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);  // scope is local not global

    two()

}

// one()


if (true) {
    const username = "Harsh"
    
    if(username === "Harsh") {
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++ interesting concept ++++++++++++++

console.log(addone(5)); //this would get called and would return the expected result

function addone(num){
    return num + 1
}


// addtwo(5) // this showcases error 
const addtwo = function(num){ //sometimes called as expression also a function represtn
    return num + 2
}