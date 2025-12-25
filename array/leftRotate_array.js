// Left rotate an array by k positions
// Example: Input: [1,2,3,4,5], k=3 Output: [4,5,1,2,3]
// Approach: Create a new array and first add elements from index k to end, then add elements from start to k-1.
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(n) for storing the rotated array.
// JavaScript Code:
// Author :Amit Kumar
function leftRotate(arr,k){
    let result =[]
    let n=arr.length;
 
    for(let i=k;i<n;i++){
      result.push(arr[i])
    }
     for(let i=0;i<k;i++){
      result.push(arr[i])
    }
    
    return result 
}
console.log(leftRotate([1,2,3,4,5],3))