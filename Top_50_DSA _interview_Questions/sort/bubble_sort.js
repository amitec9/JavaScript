// Bubble Sort Implementation in JavaScript
// Time Complexity: O(n^2) in worst and average case
// Space Complexity: O(1) as it is an in-place sorting algorithm
//  Author: Amit Kumar

function bubbleSort(arr){
    if (arr.length <= 1) return arr;
    let n = arr.length ;
    for(let i=0 ;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j] >arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
    
}

console.log(bubbleSort([43,3,45,1,3]))