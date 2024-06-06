// const user = {
//     username: "Sohail",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(` ${this.username} , Welcome to my Website `)
//         console.log(this)

//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Sohail"
//     console.log(this.username)
// }
// chai()

const chai = () =>{
    let username = "Sohail"
     console.log(this)
} 
// chai()

// const addTwo = (num1 , num2)=>{
//     return num1 + num2

// }
// console.log(addTwo(4 ,5))


// const addTwo = (num1 , num2)=> (num1 + num2)

// console.log(addTwo(4 ,5))


 const addTwo = (num1 , num2)=> ({username: "Sohail"})

 console.log(addTwo(4 ,5))

