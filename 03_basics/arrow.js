const user = {
    username : "Mrunal",
    price : 1000,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the club!`)
        console.log(this) //gives the current context(current values of the variables)
    }
}
user.welcomeMessage()
user.username = "Rutvik"
user.welcomeMessage()
console.log(this) //gives the empty object as it is outside the block