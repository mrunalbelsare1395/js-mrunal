// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

//createing own dates
// let myCreatedDate = new Date(2024, 0 ,23)
// console.log(myCreatedDate.toString())

// let myCaretedDate2 = new Date(2024, 4, 9, 3)
// console.log(myCaretedDate2.toLocaleString())

// let myCreatedDate3 = new Date("05-9-2024")
// console.log(myCreatedDate3.toDateString())

// ---------------TIMESTAMPS------------------
// let myTimestamp = Date.now()
// // console.log(myTimestamp)

// let myCaretedDate4 = new Date("05-09-2024")
// // console.log(myCaretedDate4.getTime())  // to compare time

// console.log(Math.round(Date.now()/1000))

let myDate = new Date();
console.log(myDate);
console.log(myDate.getMonth())
console.log(myDate.getDay())
console.log(myDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
}))
