// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id ="123" 
tinderUser.name ="Sammy" 
tinderUser.isLoggedIn ="false" 
tinderUser.email ="dcsda@gmail.com" 

// console.log(tinderUser);

const regularUser = {
    email: "sohail@gmail.com",
    fullname: {
        userfullname:{
            firstName:"Sufiyan",
            lastName:"khan"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstName)

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"a", 5:"b", 6:"c"}
const obj3 = {7:"a", 8:"b", 9:"c"}

// const obj4 = Object.assign({},obj1, obj2, obj3)
const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(obj4);


const user = [
    {
        id: "332",
        email:"xsdc@gmail.com"
    },
    {
        id: "332",
        email:"dddc@gmail.com"
    },
    {
        id: "332",
        email:"xsdc@gmail.com"
    }
    
]
// console.log(user[1].email)


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
    courseName: "Sohail",
    prize : "999",
    courseInstructors: "Hitesh"
}

//course.courseInstructors

const {courseInstructors:instructors} = course
console.log(instructors);

const navbar = ({company})=>{

}
navbar(company = "Sohail")

// {
//     "name":"sohail",
//     "prize":"free",
//    " coursename":"JAVA Script",
// }


// [
//     "name":"sohail",
//     "prize":"free",
//    " coursename":"JAVA Script",
// ]