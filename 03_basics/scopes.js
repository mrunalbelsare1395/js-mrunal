//GLOBAL AND LOCAL SCOPE
// let a = 10;

// if(true){
//     let a = 30
//     const b = 3000
//     console.log("block scope value of a is :", a)
// }
// console.log(a);

//NESTED SCOPE in functions
// function one(){
//    const username = "Mrunal"
//         function two(){
//           const  website = "youtube"
//             console.log(username)
//         }
//         two()
//     }
//     one()

//NESTER SCOPE IN LOOPS

// if(true){
//     const username = "Mrunal"
//     if(username === "Mrunal"){
//         const website = "Youtube"
//         console.log(username)
//     }
// }


//HOISTING
//Without holding it in a variable
console.log(addOne(5))
function addOne(num){
    return num+1
}

//WIth holding it in avariable
//console.log(holdVariable(4)) //this will give error as we have held the function value in avariable
const holdVariable = function(num1){
    return num1+1
}
console.log(holdVariable(4))
