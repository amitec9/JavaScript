// Create a frequency map of elements in an array 
// Example: Input: [1,2,2,3,3,3,4,3] Output: {1:1, 2:2, 3:4, 4:1}
// Approach: Use an object to count occurrences of each element in the array.
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(k) where k is the number of unique elements in the array.
// JavaScript Code:
// Author :Amit Kumar
function frequencyMap(arr){
    let result ={}
    for(let i=0;i<arr.length;i++){
     result[arr[i]] =(result[arr[i]] || 0)+1
    }
    
    
    return result
}
console.log(frequencyMap([1,2,2,3,3,3,4,3]))