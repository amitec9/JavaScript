// Remove duplicates from a sorted array
// Example: Input: [1,1,2,2,3,4,4,6,6,9,20,20,5,5] Output: Length of array after removing duplicates: 10, Array: [1,2,3,4,6,9,20,5]
// Approach: Use two pointers to track the position of unique elements and overwrite duplicates.    
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1)
// JavaScript Code:
// Author :Amit Kumar
function  Removeduplicates(arr){
   if (arr.length === 0) return 0;

    let j = 0; // unique index
    for(let i=0;i<arr.length;i++){
       if(arr[i] !== arr[j]){
           
           j++;
           arr[j] = arr[i]
           
       }
    }
return j+1
}
let arr = [1,1,2,2,3,4,4,6,6,9,20,20,5,5];
let k = Removeduplicates( arr );

console.log(k);         
console.log(arr.slice(0,k));