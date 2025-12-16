// Given an array of numbers, perform the following operations:

// Filter out even numbers

// Square each filtered number

// Solve the problem using two different approaches


let arr = [1, 2, 3, 4, 5];

// Solution 1: Using filter + map
let a = arr
  .filter(n => n % 2 === 0)
  .map(n => n ** 2);

console.log(a); // [4, 16]

// Solution 2: Using flatMap
let b = arr.flatMap(n => (n % 2 === 0 ? n ** 2 : []));

console.log(b); // [4, 16]
