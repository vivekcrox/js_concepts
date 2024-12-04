//1. for loop
//2. while loop
//3. do-while loop

//4. for of loop
/*🔸🔹
'for of' iterable -> array, strings, map
'for of' not iterable -> object
*/
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);   //1 2 3 4 5 
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)  //H e l l o  w o r l d !
}

// Maps - object, stores unique key value pair

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")   //stores unique key val only, if val changes for same key then, last modify val is the val of that key

console.log(map);
//output: Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);  
}

//📌'for of' not iterable
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  //TypeError: myObject is not iterable
// }

//-----------------------------------------
//5. for in loop
/* 🔸🔹
iterable : object, arr, string
not iterable : map
*/

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

//📌map 'for in' not iterable
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); //not iterable
// }

//-----------------------------------------
//6. forEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//Real-world use case 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);  //javascript java python
} )