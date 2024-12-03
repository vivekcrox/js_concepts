var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);   //10
    
}



console.log(a); //300 
// console.log(b); //error: b is not defined
console.log(c); //300


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);  //hitesh youtube
    }
    // console.log(website);  //error
}

// console.log(username);  //error


// ++++++++++++++++++ interesting ++++++++++++++++++

//hoisting

//ok - no error
console.log(addone(5))
function addone(num){
    return num + 1
}



// error !
// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }