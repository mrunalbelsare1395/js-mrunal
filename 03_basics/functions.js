// function newFun () {
//     console.log("heyy")
//     console.log("how are you")
//     console.log("where have you been")


// }
// newFun()

// //adding functions 

// function addTwoNumbers(num1, num2) {
// console.log(num1 + num2);
// }
// addTwoNumbers(2,3)

//return in function
//Method1
// function addTwoNums(num1, num2) {
//  let result = num1 + num2
//  console.log("Mrunal");
//  return result
// }
// const result = addTwoNums(2,4)
// console.log(result)

// //Method2
// function user(username) {
//     return `${username} has logged in`
// }
// console.log(user("Mrunal"));

// //Method3 - if no arguments are given
// function user1(username1){
//     if(!username1){
//     console.log("please enter the arguments");
//     return
//     }
//     return `${username1} has logged in` 
// }

// console.log(user1())

//Method4 - overwriting argument value
// function user2(username2 = "abc"){
//     if(!username2){
//     console.log("please enter the arguments");
//     return
//     }
//     return `${username2} has logged in` 
// }

// console.log(user2("xyz")) //overwrites the default value which is abc


//rest/spread operator
//Meth1
// function addCartItems(...num1){
//     return num1
// }
// console.log(addCartItems(100,200,300,400));

//Meth2
// function addCartItems(val1,val2,...num1){
//  return num1
// }
// console.log(addCartItems(100,200,300,400));

//Objects in Functions
//Method1
// const user = {
//     name: "Mrunal"
// }
// function handleObj(anyUser) {
//     console.log(anyUser.name)
// }
// handleObj(user)

//Method2
// function handleObj1(anyObj1) {
//     console.log(`hey my name is ${anyObj1.username1} and I need ${anyObj1.money} rupees`)
// }

// handleObj1({
//     username1:"Mrunal",
//     money: "10"
// })


//Array in functions
//Method1
// const myArr = [1,2,3,4,5]
// function handleArray(accessArray){
//     return accessArray[3]
// }
// console.log(handleArray(myArr));

//Method2
function myArr2(anyArray) {
    return anyArray[3]
}
console.log(myArr2([10,20,30, 40, 50]))
