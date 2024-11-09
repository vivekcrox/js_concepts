const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// ---------------------------
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);  


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(1, 2)  // [start_idx, end_idx)
console.log(newString);

const anotherString = gameName.slice(-8, 10)  //last se [-1 se start hota h] and -8 se fir forward idx 9 tak
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //present or not in the string : true or false


// const gameName = new String('hitesh-hc-com')
console.log(gameName.split('-')); // [ 'hitesh', 'hc', 'com' ]