//tim hieu scope
/**
 * local scope
 */
//function scope
() => {
    const name = 'D';
    console.log(name);
}
console.log(name)

//block scope
if(true) {
    var a = 'a';
    let b = 'b';
    const c = 'c';
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

/*
* global scope
*/
let i = 0;
for(i; i < 3; i++){
    console.log(i)
}

"use strict"
myFunction();
console.log(carName)
function myFunction() {
    carName = "Volvo";
}
