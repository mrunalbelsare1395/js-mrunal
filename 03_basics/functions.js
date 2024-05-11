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
function user2(username2 = "abc"){
    if(!username2){
    console.log("please enter the arguments");
    return
    }
    return `${username2} has logged in` 
}

console.log(user2("xyz")) //overwrites the default value which is abc


