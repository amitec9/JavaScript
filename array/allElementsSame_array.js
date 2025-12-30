//Write a function called "allElementsSame".

//Given an array, "allElementsSame" returns true if all elements in the array are the same, otherwise it returns false. 
//Assume that the array is non-empty.
// Time Complexity: O(n)
// Space Complexity: O(1)
// Author: Amit Kumar
function allElementsSame(arr){
    for(let i=0;i<arr.length;i++){

        if(arr[i] !== arr[0]){
            return false
        }
    }
    return true
    
}
//console.log(allElementsSame([1,2,4]))
console.log(allElementsSame([1,1,1]))