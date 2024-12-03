// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])  //mykey1 will be printed but we have used a symbol here


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //now, no changes will be propagate onwards
JsUser.email = "hitesh@microsoft.com" 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();  //Hello JS user
JsUser.greetingTwo();  //Hello JS user, Hitesh