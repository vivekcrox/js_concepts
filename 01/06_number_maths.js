const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  //convert number to string to apply string functions
// console.log(balance.toFixed(1));  //precision upto 1 point

/* toPrecision() : first check decimal part then fraction and round off */
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));   //123.9
const otherNum = 13.7902
console.log(otherNum.toPrecision(3))  //13.8
console.log(otherNum.toPrecision(2))  //14
console.log(otherNum.toPrecision(1))  //1e+1

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000

// // +++++++++++++ Maths Object+++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //[0, 1)
console.log((Math.random()*10) + 1);  //[1, 10]
console.log(Math.floor(Math.random()*10) + 1); // [1, 10] only integer value as floor()

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //+1 to avoid 0 val