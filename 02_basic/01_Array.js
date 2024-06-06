const myArr = [0, 2, 4, 3, 5 ]
// console.log(myArr[0])

const myArr2 = new Array(0, 2, 4, 3, 6)
// console.log(myArr2)

//++++++ Array Method +++++++ 

// myArr.push(6)
// myArr.pop()
// myArr.join(0)
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(10))
// console.log(myArr.indexOf(4))

//const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);

//Slice and Splice

console.log("A ", myArr);
const myn1 = myArr.slice(1 ,3)
console.log(myn1);

console.log("B ", myArr)
const myn2 = myArr.splice(1 ,3)
console.log(myn2)
