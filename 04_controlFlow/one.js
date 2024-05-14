//if 
// const temp = 52;
// if(temp > 50){
//     console.log("correct temp")
// }
// console.log("checking temps")

//if-else
// 

//scope
// const score = 500;
// if(score > 600){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);

//implicit scope 
// const score = 10;
// if(score < 20) console.log("implicit scope")

//Nested loop
// const score = 1000
// if(score > 5000){
//     console.log("greater than 5000");
// } else if(score >6000){
//     console.log("greater than 6000");

// }else if (score > 7000){
//     console.log("greater than 7000");

// }else{
//     console.log("score is less");
// }

const loggedInFromGoogle = true 
const loggedInFromFB = false 
const loggedInFromLinked = false 
const loggedInFromanyother = true

if(loggedInFromGoogle || loggedInFromFB && loggedInFromLinked || loggedInFromanyother ){
    console.log("heyy");
} else{
    console.log("bye");
}