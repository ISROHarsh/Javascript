// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value is ${j} and inner loop of ${i}`);
        // console.log(i + "x" + j + "=" + i*j);
    }
}


const myArray = ['Flash', 'batman', 'superman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue


// for (let index = 1; index < 21; index++) {
//     if (index == 5) {
//         console.log('5 detected');
//         break
//     }
//     console.log(index);
// }

for (let index = 1; index < 21; index++) {
    if (index == 5) {
        console.log('5 detected');
        continue
    }
    console.log(index);
}