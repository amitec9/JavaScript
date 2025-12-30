// Move all zeros to the end of the array while maintaining the order of non-zero elements
// Example: Input: [0, 1, 0, 3, 12] Output: [1, 3, 12, 0, 0]
// Approach: Use two separate arrays to store non-zero and zero elements, then concatenate them.
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(n) for storing the two separate arrays.
// JavaScript Code:
// Author :Amit Kumar
function MovezerosArray(arr){
    let nozero=[]
    let zero=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            zero.push(arr[i])
        }else{
            nozero.push(arr[i])
        }
    }
    
    return [...nozero,...zero] 
}
console.log(MovezerosArray([0, 1, 0, 3, 12]))