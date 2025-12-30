// Merge two sorted arrays into a single sorted array
// Example: Input: [1,2,3,11,5], [6,7,8,9,10] Output: [1,2,3,5,6,7,8,9,10,11]
// Approach: First concatenate both arrays and then sort the resulting array.   
// Time Complexity: O((n+m) log(n+m)) where n and m are the number of elements in the two arrays.
// Space Complexity: O(n+m) for storing the merged array.
// JavaScript Code:
// Author :Amit Kumar
function Mergetwosortedarrays(arr1,arr2){
    let result =[]
    for(let i=0;i<arr1.length;i++){
      result.push(arr1[i])
    }
     for(let i=0;i<arr2.length;i++){
      result.push(arr2[i])
    }
    
    return result.sort((a,b)=>a-b)
}
console.log(Mergetwosortedarrays([1,2,3,11,5],[6,7,8,9,10]))