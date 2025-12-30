// Find the equilibrium index of an array
// An equilibrium index is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.   
// If no such index exists, return -1.
// Example: Input: [-7, 1, 5, 2, -4, 3, 0] Output: 3
// Time Complexity: O(n)
// Space Complexity: O(1)  
// Author: Amit Kumar
function equilibriumIndex(arr){
    let totalSum = 0;
    let leftSum = 0;
    for(let num of arr){
        totalSum+=num;
    }
    for(let i=0;i<arr.length;i++){
        totalSum-=arr[i]
        if(totalSum == leftSum){
            return i;
        }
        
        leftSum+=arr[i]
    }
    return -1
}
let arr =  [-7, 1, 5, 2, -4, 3, 0]
console.log(equilibriumIndex(arr))