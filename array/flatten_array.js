// Flatten a nested array
// Example: Input: [1, [2, [3, 4], 5], 6] Output: [1, 2, 3, 4, 5, 6]
// Time Complexity: O(n)
// Space Complexity: O(n)
// Author: Amit Kumar
function flattenArray(arr){
   let result =[]
   for(let item of arr){
       if(Array.isArray(item)){
           result.push(...flattenArray(item))
       }else{
           
           result.push(item)
       }
   }
  return result ;
}
let arr =  [1, [2, [3, 4], 5], 6]
console.log(flattenArray(arr))