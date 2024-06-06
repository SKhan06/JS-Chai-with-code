// function sayName() { 
//     console.log("S");
//     console.log("O");
//     console.log("H");
//     console.log("A");
//     console.log("I");
//     console.log("L");
// }

// sayName()

// function addTwoNumber(num1 , num2){
//      console.log(num1 + num2)

// }


// function addTwoNumber(num1 , num2){
//     //  let result = num1 + num2

//     //  return result
//     return(num1 + num2)
//  }


// const result = addTwoNumber(3 ,4)const result = addTwoNumber(3 ,4)
// console.log("Result: ",result );


function loginUser(username){
    if(username === "Sohail"){
        console.log("Please type your username")
        return
        
    }
    return`${username} just log in`

}
// console.log(loginUser("Sohail"))

function calculateCartPrize(val1,val2,...nums1){
    return nums1
}

// console.log(calculateCartPrize(200 , 400, 500, 4000))

// const user = {
//     username: "Sammad",
//     price: 199
// }

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)

}

//handleObject(user)
handleObject({
    username: "Neeraj",
    price: 199
})

const myArray = [200, 300, 500, 600]
function returnSecondValue(getArray){
    return getArray[3]

}

console.log(returnSecondValue(myArray))