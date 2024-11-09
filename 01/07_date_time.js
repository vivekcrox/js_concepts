// Dates

let myDate = new Date()   //from 1970
console.log(myDate.toString());  //Sat Nov 09 2024 15:03:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());   //Sat Nov 09 2024
console.log(myDate.toLocaleString());   //11/9/2024, 3:03:42 PM
console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2023, 0, 23)  //2023 jan 23date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //5:03:00 am
// let myCreatedDate = new Date("2023-01-14")  //01->month start in this case
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

//-------------------
let myTimeStamp = Date.now()  
// console.log(myTimeStamp);  //milliseconds from 1970

// console.log(myCreatedDate.getTime());  //get time in milliseconds as given above;
// **this two time in milliseconds can used to compare the two time who is faster in quizes etc.

// console.log(Math.floor(Date.now()/1000));   //to convert in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})