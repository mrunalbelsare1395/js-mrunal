//using filter
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

//using foreach
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach((num) => {
// if(num > 4){
//     newNums.push(num)
// }
// })
// console.log(newNums);

//using map
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => {return num + 6})
// console.log(newNums);

//chaining 
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums
                  .map((num) => num * 10)
                  .map((num) => num +1 )
                  .filter((num) => num >=40 )
console.log(newNums);

