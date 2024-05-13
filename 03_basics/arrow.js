// const user = {
//     username : "Mrunal",
//     price : 1000,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to the club!`)
//         console.log(this) //gives the current context(current values of the variables)
//     }
// }
// user.welcomeMessage()
// user.username = "Rutvik"
// user.welcomeMessage()
// console.log(this) //gives the empty object as it is outside the block


//you cannot use THIS in function in this way:
// function discussingThis(){
//      let username = "Mru"
//      console.log(this.username);
// }
// discussingThis()


//use of ARROW function
//method1
// const addTwo = (num1, num2) => {

//       return num3 = num1+num2
// }

// console.log(addTwo(2,3));

//method1 - implicit return
// const addTwo = (num1 , num2) => num3 = num1+num2
// console.log(addTwo(2,3));

//method2- implicit return
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(2,3))

//method3- implicit return
const addTwo = (num1, num2) => ({name:"Mrunal"})
console.log(addTwo(2,3))