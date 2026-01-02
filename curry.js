//Currying is a technique of converting a function with multiple arguments into a sequence of functions each taking a single argument.
// It allows partial application of functions, enabling you to create specialized functions by fixing some arguments while leaving others to be provided later.
// normal function
// Author :Amit Kumar
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(10,20,30))
// curry function
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(10)(20)(50))
// short curry function using arrow function
let shortSum = (a) => (b) => (c) => a+b+c;
console.log(shortSum(10)(10)(10))

// infinite curry function
function muSum(a) { 
    return function(b) {
        if(b){ return muSum(a+b);}
        return a;
    }
}
console.log(muSum(10)(20)(20)(80)())