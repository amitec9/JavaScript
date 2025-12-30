// Find the union of two arrays (unique elements from both arrays)
// Example: Input: [1,2,2,3], [2,3,4] Output: [1,2,3,4]
// Approach: Use a map to track unique elements while iterating through both arrays.    
// Time Complexity: O(n+m) where n and m are the number of elements in the two arrays.
// Space Complexity: O(n+m) for storing the unique elements.
// JavaScript Code:
// Author :Amit Kumar
function union(arr1,arr2){
    let map={}
    let result=[]
    let arr =arr1.concat(arr2)
    for(let i=0;i<arr.length;i++){
        if(!map[arr[i]]){
            map[arr[i]] =true
           result.push(arr[i]) 
        }
     
    }
   
    
    
    return result
}
console.log(union([1,2,2,3],[2,3,4]))