// Find the second largest element in an array
// Example: Input: [16,2,1,445,25,6] Output: Second Largest: 25
// Approach: Initialize two variables to store the largest and second largest elements. Iterate through the array and update these variables accordingly.   
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1)
// JavaScript Code:
// Author :Amit Kumar

function  secondLargest(arr){
    if(arr.length <2 ){
        return "Array must have at least 2 elements";
    }

    let largest =arr[0]
    let second =-1
    for(let i=1;i< arr.length;i++){
        if(arr[i] > largest){
            second = largest;
            largest = arr[i];
            
        }else if(arr[i] < largest && (second === -1 || arr[i] > second)){
            second = arr[i];
        }
    }
    
        

    console.log(second)
    return second
}
secondLargest([16,2,1,445,25,6])