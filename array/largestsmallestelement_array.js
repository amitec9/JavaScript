// Find the largest and smallest element in an array
// Example: Input: [16,2,1,445,5,6] Output: Smallest: 1, Largest: 445
// Approach: Initialize two variables to store the smallest and largest elements. Iterate through the array and update these variables accordingly.
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1)
// JavaScript Code:
// Author :Amit Kumar
function  largestsmallestelement(arr){
    let small =arr[0]
    let large =arr[0]
    for(let i=1;i< arr.length;i++){
        if(arr[i] < small){
            small = arr[i]
        }
        if(arr[i] > large){
            large = arr[i]
            
        }
    }
    console.log(small,   large)
}
 largestsmallestelement([16,2,1,445,5,6])