const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //current object will be printed i.e {username: "hitesh or othername if changes", price: 999, welcomeMessage:function}
    }

}

// user.welcomeMessage() //hitesh, welcome to website
// user.username = "sam"
// user.welcomeMessage() //sam, welcome to website

// console.log(this);  //in node env -> {} || in browser env -> window object as global object in browser

//---------------------------
/*
Regular Functions :
In non-strict mode, this refers to the global object (window in browsers, global in Node.js).
In strict mode, this is undefined if the function is called as a standalone function
*/
// function chai(){
//     let username = "hitesh"
//     console.log(this);  //global object in node env
//     console.log(this.username);  //undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this)   //global object
//     console.log(this.username); //undefined
// }
// chai()

//-------------------------------------
/*
- this in an arrow function does not have its own context. It inherits this from its surrounding lexical scope (the scope in which the function was defined).
- Useful in callbacks to maintain the parent this.
*/
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username); //undefined
//     console.log(this);  //{}
// }

// chai()

//-------------------------------------
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   //only 1 statement

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3, 4)) //{username: 'hitesh'}

//--------------------------------------
// How arrow 'this' works
const obj = {
    name: 'Vivek',
    arrowFunction: () => {
        console.log(this);
    }
};

obj.arrowFunction(); // Logs: global object (or undefined in strict mode)

// Lexical scoping example :
function outerFunction() {
    const arrow = () => console.log(this);
    arrow();
}

const obj2 = { outerFunction };   //creting obj2 as object having a function outerFunction inside it.
console.log(obj2);  //{ outerFunction: [Function: outerFunction] }
obj2.outerFunction(); // Logs: obj2 (inherited from outerFunction's context)

