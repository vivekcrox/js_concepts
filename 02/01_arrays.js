// array

const myArr = [0, 1, 2, 3, 4, 5]  //can hold any type of val at the same time.
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)   //add in beginning of the array

// myArr.shift()   //delete from the beginning of the array

// console.log(myArr.includes(9));  //check if given element present or not : true / false
// console.log(myArr.indexOf(3));   //at which index given element present

// -----------------------------
const newArr = myArr.join()

console.log(myArr);  //[0,1,2,3,4,5]
console.log( newArr);   //0,1,2,3,4,5
console.log(typeof newArr);  //string


// slice, splice
console.log("A ", myArr);  //[ 0, 1, 2, 3, 4, 5 ]
//------------------------------
const myn1 = myArr.slice(1, 3)    //[startIdx, endIdx)
console.log(myn1);  //[ 1, 2 ]

console.log("B ", myArr);  //[ 0, 1, 2, 3, 4, 5 ] -> slice don't delete elements from the original arr

//------------------------------
const myn2 = myArr.splice(1, 3)  //[startIdx, endIdx] -> splice delete this range elements from original arr
console.log("C ", myArr);  //[ 0, 4, 5 ]
console.log(myn2);  //[ 1, 2, 3 ]