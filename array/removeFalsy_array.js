// Remove falsy values from an array
// Falsy values include: false, 0, "", null, undefined, NaN
// Example: Input: [false, 0, "", null, undefined, NaN, 5, "JS"] Output: [5, "JS"]
// Time Complexity: O(n)
// Space Complexity: O(n)
// Author: Amit Kumar
function removeFalsy(arr){
    return arr.filter(v => v !== false && v !== "" && v !== 0 && v !== null && v !== undefined && !Number.isNaN(v)
    )
}
let arr =  [false, 0, "", null, undefined, NaN, 5, "JS"]
console.log(removeFalsy(arr))