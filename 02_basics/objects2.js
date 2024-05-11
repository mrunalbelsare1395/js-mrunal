//objects inside objects

// const tinderUser = {};

// tinderUser.id = '4',
// tinderUser.name = "mrunal",
// tinderUser.isLoggedIn = true

// //console.log(tinderUser);

// const anotherUser = {
//     name : "mru" ,
//     fullName : {
//         lastName : "belsare",

//     }
// }
// console.log(anotherUser.fullName.lastName)


// //combining objects
// const obj1 = {1 : "a", 2: "b"}
// const obj2 = {3 : "c", 4: "d"}

// //const obj3 = Object.assign({} , obj1 , obj2) //method1
// const obj3 = {...obj1,... obj2} //method2
// console.log(obj3);

//objects inside arrays - we get when we access data drom DATABASE

// const obj7 = [
//     {
//         id :1,
//         name : "mru"
//     },
//     {
//         email: "abc@gmail.com"
//     }
// ]

// console.log(obj7[0].name)

//accessing keys and values from the objects
// const obj = {
//     id: 1,
//     name: "Mrunal",
//     email : "abc@gmail.com"
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log(obj.hasOwnProperty('email'))

//Object De-structuring
const course = {
    coursename : "javascript",
    coursefees : "1000",
    courseteacher : "hitesh"
}

const {courseteacher} = course
console.log(courseteacher) //method1

const {courseteacher : teacher} = course
console.log(teacher) //method 2 