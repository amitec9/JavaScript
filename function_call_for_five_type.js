// Different types of function calls in JavaScript
// 1. Regular function call
// 2. Constructor function call using 'new'
// 3. Function call using 'call' method
// 4. Method call on an object
// 5. Assigning function to a variable and calling it
// Author: Amit Kumar
function sayHello(){
    return "Hello World";
}
let obj ={
    sayHello
}
// 1. Regular function call
console.log(sayHello())
// 2. Constructor function call using 'new'
let a =new sayHello
console.log(a)
// 3. Function call using 'call' method
console.log(sayHello.call())
// 4. Method call on an object
console.log(obj.sayHello())
// 5. Assigning function to a variable and calling it
let result =sayHello
console.log(result())