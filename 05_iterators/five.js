//for each loop
//using call back function
// const myArr = ['js', 'java', 'ruby', 'cpp']
// myArr.forEach( function(value){
//     console.log(value);
// })

//using arrow function
// const myArr = ['abc', 'xyz', 'klm']
// myArr.forEach((value) => {
// console.log(value);
// })

//using function reference
// const myArr = ['abc', 'xyz', 'klm']
// function printMe(item){
//     console.log(item);
// }
// myArr.forEach(printMe)

//printing item, index and arr using foreach loop
// const myArr = ['a','b','c']
// myArr.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

//multiple objects in an array using foreach loop
const myCode = [
    {
        nameLang: "Java",
        shortcutLang: "j"
    },
    {
        nameLang: "ruby",
        shortcutLang: "rb"
    },
    {
    nameLang: "c++",
        shortcutLang: "cpp"
    }
]
myCode.forEach((item) => {
    console.log(item.nameLang);
})