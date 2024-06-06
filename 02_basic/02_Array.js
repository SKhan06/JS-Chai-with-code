const marbles = ["Ironman", "Spiderman", "Captain"]
const dc = ["Batman", "Antman", "Thor"]

// marbles.push(dc)
// console.log(marbles)

// const all_Heroes = marbles.concat(dc)
// console.log(all_Heroes);

const allHeros = [...marbles, ...dc]
console.log(allHeros);

const anotherArr = [1, 3, 5,[3,4,6],7,[2,3,[9,3,1]]]
const realArr = anotherArr.flat(3)
console.log(realArr);

// console.log(Array.isArray("Sohail"))
// console.log(Array.from("Sohail"))
//console.log(Array.apply("Sohail"))
 //console.log(Array.arguments("Sohail"))
// console.log(Array.bind("Sohail"))
// console.log(Array.call("Sohail"))
// console.log(Array.caller("Sohail"))
// console.log(Array.length("Sohail"))
// console.log(Array.name("Sohail"))
// console.log(Array.toString("Sohail"))



let score1 = 100
let score2 = 300
let score3 = 400
console.log(Array.of(score1,score2,score3))