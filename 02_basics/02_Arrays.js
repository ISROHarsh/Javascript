const marvel_heroes = ["Thor", "Ironman", "SpiderMan"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// console.log(marvel_heroes.join());
// console.log(marvel_heroes);

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const allNewHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

// console.log(Array.isArray("Harsh"));
// console.log(Array.from("Harsh"));
// console.log(Array.from({name : "Harsh"})); 
//interesting - not specified to make arrays from what ? the keys or values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
