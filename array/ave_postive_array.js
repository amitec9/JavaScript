// Write a JavaScript program to calculate the average of positive numbers in an array.
// Example: Input: [-1,2,0,-4,25,-5] Output: 13.5
// Approach: Iterate through the array, sum the positive numbers and count them, then divide the sum by the count.      
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1) as we are using a constant amount of space.
// JavaScript Code:
// Author :Amit Kumar
function arrayAvaage(arr){
    let count =0;
    let sum =0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>0){
            count++;
            sum+=arr[i]
        }
    }
    return sum/count;
}

console.log(arrayAvaage([-1,2,0,-4,25,-5]))