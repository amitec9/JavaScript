// Find the missing number in an array of size n-1 containing numbers from 1 to n
// Example: Input: [1,2,3,5] Output: Missing Number: 4
// Approach: Calculate the expected sum of numbers from 1 to n using the formula n(n+1)/2. Subtract the actual sum of the array from this expected sum to find the missing number.
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1)
// JavaScript Code:
// Author :Amit Kumar
function  MissingNumber(arr,n){
    let sum =0;
    let total = n*(n+1)/2
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
return total- sum
}
console.log(MissingNumber([1,2,3,5],5))