// Object literate

const mySym = Symbol("key1")

const JsUser = {
    name:"Sohail",
    email:"sohail@gmail.com",
    age: 19,
    [mySym]: "key1",
    location: "Hyderabad",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Friday"]
}

// console.log(JsUser["age"])
// console.log(JsUser.age)
// console.log(JsUser[mySym])

// JsUser.email = "amdsohail@gmail.com"
// console.log(JsUser)

// Object.freeze(JsUser)
// JsUser.email = "djfsefhd@gmail.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greetingTwo())

