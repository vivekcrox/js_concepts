console.log(null > 0);   //false  (0 > 0 gives false)
console.log(null == 0);  //false  (equality operator works differently)
console.log(null >= 0);  //true  (comparison convert null to 0 i.e 0 >= 0 gives true)

console.log(undefined == 0);  //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

// === 

console.log("2" === 2);