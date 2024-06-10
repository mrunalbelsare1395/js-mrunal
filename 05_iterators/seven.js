//reduce using functions
// const myValues = [1,2,3]
// const newValue = myValues.reduce(function(accumulator, currentValue) {
//      console.log(`accumulatorValue is ${accumulator} and currentValue is ${currentValue} `);
//      return accumulator + currentValue
// }, 0)
// console.log(newValue);

//reduce using arrow functions
// const myValue = [1,2,3]
// const newValue = myValue.reduce((accumulator,currentValue) => accumulator+currentValue,0 )
// console.log(newValue);

//one more example 
const shoppingCart = [
    {
        name: "js",
        costCourse: 100
    },
    {
        name: "java",
        costCourse: 200
    },
    {
        name: "css",
        costCourse: 300
    }
]

const totalPrice = shoppingCart.reduce((accumulator,item) => accumulator+item.costCourse,0)
console.log(totalPrice);