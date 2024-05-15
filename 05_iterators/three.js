//for of 
//on arrays
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

//on strings
// const greeting = "Hello World"
// for (const greet of greeting) {
//     console.log(greet);
// }

//Maps
// const map =new Map()
// map.set('IN',"India")
// map.set("AUS", "Australia")
// map.set("FIN", "Finland")
// map.set('IN',"India")
// console.log(map);

//iterating maps using an array
const map =new Map()
map.set('IN',"India")
map.set("AUS", "Australia")
map.set("FIN", "Finland")
map.set('IN',"India")

for([key,value] of map){
    console.log(key , ":-", value);
}
